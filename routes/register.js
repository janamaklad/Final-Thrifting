import express from "express";
import { signup_post, login_post } from "../controllers/register.js";
const router = express.Router();

router.post("/signup", signup_post);
router.post("/login", login_post);

export default router;