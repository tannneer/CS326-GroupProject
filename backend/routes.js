import express from "express";
import {register, login, logout,} from "./controller.js";
//import { isAuthenticated, authorizeRole } from "../auth/middleware.js";

const router = express.Router();

// Routes for registration and login
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

// Protected routes
//router.get("/admin", isAuthenticated, authorizeRole("admin"), getAdminArea);
//router.get("/profile", isAuthenticated, getProfile);

export default router;
