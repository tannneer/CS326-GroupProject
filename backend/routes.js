import express from "express";
import {register, login, logout,} from "./controller.js";
import { addGoalController, deleteTaskController } from "./createpage/createControllers.js";
import { addTaskController } from "./createpage/createControllers.js";

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
router.delete("/delete/goals/:id",deleteGoalController);
router.delete("/delete/tasks/:id", deleteTaskController);




// Protected routes
//router.get("/admin", isAuthenticated, authorizeRole("admin"), getAdminArea);
//router.get("/profile", isAuthenticated, getProfile);

export default router;
