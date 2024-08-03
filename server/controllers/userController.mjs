import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
const registerUser =  async  (req,res)=>{
    let user = new userModel(req.body);
    user.password = await bcrypt.hash(user.password, 10);
    let result = await user.save();
    res.send(['Registration complete']);

}

// const loginUser =  async  (req,res)=>{}

const returnUsers = async (req,res)=>{
    userModel.find().then((data) => {
        res.send(data);
    })
}

export default{registerUser,returnUsers}