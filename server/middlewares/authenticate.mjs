import { body, validationResult } from "express-validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";


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
const userLogin = async (req,res)=>{
    const {email, password} = req.body;
    const user = await userModel.findOne({email:email});
    if(!user){
        
        return res.json({login: false ,message:'noUser'});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        
        return res.json({login: false,message:'incorrectPassword'});
    }
    return res.json({login:true, message:'successful'});
}

export default { userRegistrationValidation, userLogin };