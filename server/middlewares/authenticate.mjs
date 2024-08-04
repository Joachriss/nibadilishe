import { body, validationResult } from "express-validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

const userRegistrationValidation = () => [
    // Validate and sanitize inputs
    body('name').isString().isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
    body('email')
        .isEmail().withMessage('Email must be valid')
        .custom(async (value) => {
            // Check if email already exists in the database
            const user = await userModel.findOne({ email: value });
            if (user) {
                throw new Error('Email already in use');
            }
        }),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    body('confirmPassword').custom((value, { req }) => value === req.body.password).withMessage('Passwords do not match'),

    // Middleware to check for validation errors
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
        }
        next();
    }
];

// login
const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
        return res.json({ login: false, error: 'No user found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.json({ login: false, error: 'Invalid password' });
    }
    // if matches
    if (isMatch) {
        jwt.sign({ email: user.email, id: user._id, name: user.name },process.env.JWT_SECRET,{},(err, token) => {
            if (err) {throw err;}
            res.cookie('token',token).json(user);
            // return res.json({login:true, message:'successful'});
        });
    }
}

// user profile jwt token 
const getProfile = (req, res) => {
    const {token} = req.cookies;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
        if (err) throw err;
        res.json(user);
      });
    } else {
      res.json(null);
    }
  
  };

export default { userRegistrationValidation, userLogin, getProfile };