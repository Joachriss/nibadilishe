import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";



// REGISTRATION
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new userModel({ name, email, password: hashedPassword });
  await newUser.save();
  res.send('Registration complete' );
};
// registration
// const registerUser =  async  (req,res)=>{
//     let user = new userModel(req.body);
//     user.password = await bcrypt.hash(user.password, 12);
//     await user.save();
//     res.send(['Registration complete']);

// }


const returnUsers = async (req,res)=>{
    userModel.find().then((data) => {
        res.send(data);
    })
}

export default{registerUser,returnUsers,}