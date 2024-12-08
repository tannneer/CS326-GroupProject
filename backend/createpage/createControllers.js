
      import { Goal } from '../models/goal.js';
      import { Task } from '../models/task.js';
      
      export const addGoalController = async (req, res) => { 
        const { goalName, goalDueDate, goalTotalTime } = req.body; 

        try {
          await Goal.create({
            goalName,
            goalDueDate,
            goalTotalTime,
          });
          return res.status(201).json({ message: "Goal added successfully" });
        } catch (err) {
          return res.status(400).json((400, "Failed to add goal"));
        }
      }

      export const addTaskController = async (req,res) => { 
        const { taskName, taskDueDate, taskTotalTime } = req.body;

        try {
          await Task.create({
            taskName,
            taskDueDate,
            taskTotalTime,
          });
        } catch (err) {
          return res.status(400).json((400, "Failed to add task"));
        }
      }

      //add Priority List controller (to be done by Christian)





