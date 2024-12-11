// controllers/goalsTasksController.js
import Goal from '../models/goal.js';
import Task from '../models/task.js';

/**
 * Fetch all goals along with their associated tasks.
 * Includes tasks for each goal.
 */
export const getGoalsWithTasks = async (req, res) => {
  try {
    // Fetch all goals and their associated tasks
    const goals = await Goal.findAll({
      include: { 
        model: Task, // Include tasks for each goal
        required: false, // Include goals even if they have no tasks
      },
    });

    return res.status(200).json(goals);
  } catch (err) {
    console.error('Error fetching goals with tasks:', err);
    return res.status(500).json({ message: 'Failed to fetch goals with tasks', error: err.message });
  }
};

/**
 * Fetch all tasks associated with a specific goal.
 */
export const getTasksForGoal = async (req, res) => {
  const { goalId } = req.params;

  try {
    // Fetch tasks that belong to the specified goal
    const tasks = await Task.findAll({
      where: { goalId },
    });

    return res.status(200).json(tasks);
  } catch (err) {
    console.error('Error fetching tasks for goal:', err);
    return res.status(500).json({ message: 'Failed to fetch tasks for goal', error: err.message });
  }
};
