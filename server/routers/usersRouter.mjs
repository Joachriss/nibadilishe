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

// router.post(
//     "/api/createUser",
//     (req,res)=>{
//         req.
//     }
// );

export default router;