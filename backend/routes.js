import express from "express";
import {register, login, logout,} from "./controller.js";
import { addGoalController } from "./createpage/createControllers.js";
import { addTaskController } from "./createpage/createControllers.js";
import { startTimer, stopTimer } from './calendarPage/timerController.js';
import { getGoalsWithTasks, getTasksForGoal } from './calendarPage/goalsTasksController.js';
import { generateSchedule } from './calendarPage/schedulerController.js';


const router = express.Router();

// Routes for registration and login
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

//routes for create page
router.post("/addGoal",addGoalController)
router.post("/addTask",addTaskController);

//routes for calendar page

// Timer Routes
router.post('/timer/start', startTimer);  // Start the timer for a task
router.post('/timer/stop', stopTimer);    // Stop the timer for a task

// Goal and Task Routes
router.post('/addGoal', addGoalController);   // Add a new goal
router.post('/addTask', addTaskController);   // Add a new task
router.get('/goals', getGoalsWithTasks);      // Get all goals with tasks
router.get('/goals/:goalId/tasks', getTasksForGoal);  // Get tasks for a specific goal

// Schedule Route
router.get('/schedule', generateSchedule);  // Generate schedule based on tasks


// Protected routes
//router.get("/admin", isAuthenticated, authorizeRole("admin"), getAdminArea);
//router.get("/profile", isAuthenticated, getProfile);

export default router;
