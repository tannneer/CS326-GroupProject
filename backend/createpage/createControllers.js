
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

            // delete goal controller
            export const deleteGoalController = async (req, res) => {
              const { id } = req.params; // Extract the goal ID from the request parameters
           
              try {
                const deletedGoal = await Goal.destroy({
                  where: {
                    id, // Match the goal with the provided ID
                  },
                });
           
                if (deletedGoal) {
                  return res.status(200).json({
                    message: "Goal deleted successfully",
                    goalId: id,
                  });
                } else {
                  return res.status(404).json({
                    message: "Goal not found",
                  });
                }
              } catch (err) {
                console.error("Error deleting goal", err);
                return res.status(500).json({
                  message: "Failed to delete goal",
                });
              }
            };

        //delete Task controller 

        export const deleteTaskController = async (req, res) => {
          const { id } = req.params; // Extract the task ID from the request parameters
        
          try {
            const deletedTask = await Task.destroy({
              where: {
                id, // Match the task with the provided ID
              },
            });
        
            if (deletedTask) {
              return res.status(200).json({
                message: "Task deleted successfully",
                taskId: id,
              });
            } else {
              return res.status(404).json({
                message: "Task not found",
              });
            }
          } catch (err) {
            console.error("Error deleting task", err);
            return res.status(500).json({
              message: "Failed to delete task",
            });
          }
        };
        
           
      
      //add Priority List controller (to be done by Christian)





