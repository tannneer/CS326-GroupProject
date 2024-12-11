// controllers/timerController.js
import Timer from '../models/timer.js';
import Task from '../models/task.js';

// Start the timer for a specific task
export const startTimer = async (req, res) => {
  const { taskId } = req.body; // The taskId is passed in the request body

  try {
    // Fetch the task by its ID to ensure it exists
    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' }); // Return 404 if the task doesn't exist
    }

    // Create a new timer record in the database, with the current time as the start time
    const timer = await Timer.create({
      taskId, 
      startTime: new Date(), // Set the start time to the current date and time
    });

    // Respond with the created timer and a success message
    return res.status(201).json({
      message: 'Timer started successfully',
      timer,
    });
  } catch (err) {
    console.error('Error starting timer', err); // Log the error for debugging
    return res.status(500).json({ message: 'Failed to start timer', error: err.message }); // Return a 500 error
  }
};

// Stop the timer for a specific task and calculate the elapsed time
export const stopTimer = async (req, res) => {
  const { timerId } = req.body; // The timerId is passed in the request body

  try {
    // Fetch the timer by its ID to stop it
    const timer = await Timer.findByPk(timerId);
    if (!timer) {
      return res.status(404).json({ message: 'Timer not found' }); // Return 404 if the timer doesn't exist
    }

    // Set the end time of the timer to the current date and time
    timer.endTime = new Date();
    await timer.save(); // Save the updated timer record

    // Calculate the elapsed time by subtracting the start time from the end time
    const elapsedTime = (new Date(timer.endTime) - new Date(timer.startTime)) / 1000; // Convert milliseconds to seconds

    // Respond with the elapsed time in seconds
    return res.status(200).json({
      message: `Timer stopped. Elapsed time: ${elapsedTime} seconds.`,
      elapsedTime,
    });
  } catch (err) {
    console.error('Error stopping timer', err); // Log the error for debugging
    return res.status(500).json({ message: 'Failed to stop timer', error: err.message }); // Return a 500 error
  }
};
