import express from "express";
import {register, login, logout,} from "./controller.js";
import { addGoalController } from "./createpage/createControllers.js";
import { addTaskController } from "./createpage/createControllers.js";
import { startTimer, stopTimer } from './calendarPage/timerController.js';
import { getGoalsWithTasks, getTasksForGoal } from './calendarPage/goalsTasksController.js';
import { generateSchedule } from './calendarPage/schedulerController.js';
import { getProfile, updateProfilePicture } from "./profilePage/profileController.js";
import multer from "multer"; 

const router = express.Router(); 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Directory for storing uploaded files
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${file.originalname}`;
      cb(null, uniqueSuffix);
    },
  });
  const upload = multer({ storage }); 

// Routes for registration and login
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);   

router.get("/profile", getProfile); // Retrieve profile data
router.post("/profile/upload", upload.single("profilePic"), updateProfilePicture); 

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
