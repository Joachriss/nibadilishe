
import { Router } from "express";
import userController from "../controllers/userController.mjs";

const router = Router();

router.get( '/api/getUsers', userController.returnUsers);

// registration
router.post("/api/createUser", userController.registerUser);

export default router;