import express from "express";
import {register, login, logout,} from "./controller.js";
import { addGoalController } from "./createpage/createControllers.js";
import { addTaskController } from "./createpage/createControllers.js";
import { getUserController } from "./profilepage/profileControllers.js";

const router = express.Router();

// Routes for registration and login
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user:id", getUserController)

//routes for create page
router.post("/addGoal",addGoalController)
router.post("/addTask",addTaskController);




// Protected routes
//router.get("/admin", isAuthenticated, authorizeRole("admin"), getAdminArea);
//router.get("/profile", isAuthenticated, getProfile);

export default router;
