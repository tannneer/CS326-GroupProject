import express from "express";
import {register, login, logout,} from "./controller.js";
import { addGoalController, deleteTaskController } from "./createpage/createControllers.js";
import { addTaskController } from "./createpage/createControllers.js";
import { deleteGoalController } from "./createpage/createControllers.js";
import { addPriorityController } from "./priority/priorityControllers.js";
import { deletePriorityController } from "./priority/priorityControllers.js";


const router = express.Router();

// Routes for registration and login
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

//routes for create page
router.post("/addGoal",addGoalController)
router.post("/addTask",addTaskController);
router.delete("/delete/goals/:id",deleteGoalController);
router.delete("/delete/tasks/:id", deleteTaskController);

router.post("/addPriority", addPriorityController);
router.delete("/delete/priorities/:id", deletePriorityController);


// Protected routes
//router.get("/admin", isAuthenticated, authorizeRole("admin"), getAdminArea);
//router.get("/profile", isAuthenticated, getProfile);

export default router;
