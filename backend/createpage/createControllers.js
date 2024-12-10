
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
          });} catch (err) {
            console.error('Error adding goal', err);
          return res.status(400).json((400, "Failed to add goal"));
        }
      }

      export const addTaskController = async (req,res) => { 
        const { taskName, taskDueDate, taskTotalTime, goalId } = req.body;

        const goal = await Goal.findByPk(goalId);
        if(!goal) { 
          return res.status(404).json((404, "Goal not found")); 
        }

        try {
          await Task.create({
            taskName,
            taskDueDate,
            taskTotalTime,
            goalId
          });
          return res.status(201).json({
            message: "Task added successfully",
            task: {
              taskName,
              taskDueDate,
              taskTotalTime,
              goalId
            },
          });
        } catch (err) {
          console.error('Error adding tasks', err);
          return res.status(400).json((400, "Failed to add task"));
        }
      }

      //add Priority List controller (to be done by Christian)