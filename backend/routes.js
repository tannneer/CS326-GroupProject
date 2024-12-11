import express from "express";
import {register, login, logout,} from "./controller.js";
import { addGoalController } from "./createpage/createControllers.js";
import { addTaskController } from "./createpage/createControllers.js";
import { taskProgressController } from "./analyticspage/analyticscontroller.js";

const router = express.Router();

// Routes for registration and login
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

//routes for create page
router.post("/addGoal",addGoalController)
router.post("/addTask",addTaskController);


//routes for analytics page 
router.get("/getTasks", taskProgressController);
router.get("/taskAnalytics", taskProgressController);

// Protected routes
//router.get("/admin", isAuthenticated, authorizeRole("admin"), getAdminArea);
//router.get("/profile", isAuthenticated, getProfile);

export default router;
