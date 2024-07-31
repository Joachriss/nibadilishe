import express, { json } from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors'
// import userModel from "./models/userModel.js";
import usersRouter from "./routers/usersRouter.mjs";
// const userRouter = require('./routers/userRoutes');

const app = express();
app.use(cors());
app.use(json());
app.use(usersRouter);

dotenv.config();

const PORT = process.env.PORT || 5010;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() =>{
    console.log("Database is connected");
    app.listen(PORT, ()=>{
        console.log('server is running on port ' + PORT);
    });

}).catch((err) => console.log(err));

