import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
// registration
const registerUser =  async  (req,res)=>{
    let user = new userModel(req.body);
    user.password = await bcrypt.hash(user.password, 12);
    await user.save();
    res.send(['Registration complete']);

}



// const loginUser =  async  (req,res)=>{}

const returnUsers = async (req,res)=>{
    userModel.find().then((data) => {
        res.send(data);
    })
}

export default{registerUser,returnUsers,}