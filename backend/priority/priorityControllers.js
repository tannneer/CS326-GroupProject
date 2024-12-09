import { Priority } from '../models/priority.js';

export const addPriorityController = async (req, res) => { 
    const { priorityName, priorityDueDate, priorityLevel } = req.body; 

    try {
      await Priority.create({
        priorityName,
        priorityDueDate,
        priorityLevel,
      });
      return res.status(201).json({
        message: "Priority added successfully",
        priority: {
          priorityName,
          priorityDueDate,
          priorityLevel,
        },
      });} catch (err) {
        console.error('Error adding priority', err);
      return res.status(400).json((400, "Failed to add priority"));
    }
  
}

//delete priority controller 
            // delete goal controller
            export const deletePriorityController = async (req, res) => {
              const { id } = req.params; // Extract the goal ID from the request parameters
           
              try {
                const deletedGoal = await Priority.destroy({
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

