
      import { Goal } from '../models/goal.js';
      import { Task } from '../models/task.js';
      
      export const addGoalController = async (req, res) => { 
        const { goalName, goalDueDate, hoursToComplete } = req.body; 

        try {
          await Goal.create({
            goalName,
            goalDueDate,
            hoursToComplete,
          });
          return res.status(201).json({
            message: "Goal added successfully",
            goal: {
              goalName,
              goalDueDate,
              hoursToComplete,
            },
          });        } catch (err) {
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





