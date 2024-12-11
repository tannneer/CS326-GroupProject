// controllers/scheduleController.js
import Goal from '../models/goal.js';
import Task from '../models/task.js';

// Generate a schedule based on tasks and goals
export const generateSchedule = async (req, res) => {
  try {
    // Fetch all tasks and goals
    const tasks = await Task.findAll({
      include: Goal, // Include the related goal
      order: [['dueDate', 'ASC']], // Sort tasks by due date
    });

    // Map the tasks into a schedule format
    const schedule = tasks.map(task => ({
      taskName: task.taskName,
      goalName: task.Goal.goalName,
      dueDate: task.dueDate,
      hoursToComplete: task.hoursToComplete,
    }));

    return res.status(200).json(schedule);
  } catch (err) {
    console.error('Error generating schedule', err);
    return res.status(500).json({ message: 'Failed to generate schedule', error: err.message });
  }
};
