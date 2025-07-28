import express from "express";
import { test } from "../controllers/user.controller.js";
const router = express.Router();

// Sample route for user registration
router.get('/test',test);

export default router;