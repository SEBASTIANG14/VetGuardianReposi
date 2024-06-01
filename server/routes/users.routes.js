import { Router } from "express";
import { createUser } from "../controllers/signup.controllers.js";

const router = Router()

router.post('/signup', createUser)

export default router;