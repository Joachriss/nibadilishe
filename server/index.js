import express, { json } from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors'
import usersRouter from "./routers/usersRouter.mjs";
import cookieParser from "cookie-parser";

const app = express();
import mongoSanitize from 'express-mongo-sanitize';
import xssClean from "xss-advanced";

// MIDDLEWARES
app.use(cors({
    // Credentials : true,
    // origin :"http:/127.0.0.1:5173",
}));
app.use(express.json());
app.use(mongoSanitize());
app.use(xssClean());

// json middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

// routes
app.use(usersRouter);


const PORT = process.env.PORT || 5010;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() =>{
    console.log("Database is connected");
    app.listen(PORT, ()=>{
        console.log('server is running on port ' + PORT);
    });

}).catch((err) => console.log(err));
 