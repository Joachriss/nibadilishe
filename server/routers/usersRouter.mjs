import userModel from "../models/userModel.js";
import { Router } from "express";

const router = Router();

router.get(
    '/api/getUsers', 
    async (req, res) => {
        userModel.find().then((data) => {
            res.send(data);
        })
    }
);

router.post(
    "/api/createUser", async (req,res)=>{
        let user = new userModel(req.body);
        let result = await user.save();
        console.log(result);

    }
);

export default router;