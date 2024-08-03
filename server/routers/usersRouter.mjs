
import { Router } from "express";
import userController from "../controllers/userController.mjs";
import  authenticate  from "../middlewares/authenticate.mjs";

const router = Router();

router.get( '/api/getUsers', userController.returnUsers);

// registration
router.post("/api/createUser",authenticate.userRegistrationValidation(), userController.registerUser);

// login
router.post('/api/login',authenticate.userLogin);

export default router;