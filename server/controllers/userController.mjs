import userModel from "../models/userModel.js";
const registerUser =  async  (req,res)=>{
    let user = new userModel(req.body);
    let result = await user.save();
    res.send('Registration complete');

}

// const loginUser =  async  (req,res)=>{}

const returnUsers = async (req,res)=>{
    userModel.find().then((data) => {
        res.send(data);
    })
}

export default{registerUser,returnUsers}