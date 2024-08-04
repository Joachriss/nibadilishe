import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();



// REGISTRATION
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new userModel({ name, email, password: hashedPassword });
  await newUser.save();
  res.send({register:true, message:'Registration complete'});
};


const returnUsers = async (req, res) => {
  userModel.find().then((data) => {
    res.send(data);
  })
}



export default { registerUser, returnUsers }