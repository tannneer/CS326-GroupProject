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