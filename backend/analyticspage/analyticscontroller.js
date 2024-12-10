import Task from "../models/task.js";

export const taskProgressController = async (req, res) => {
  const { taskId } = req.body;

  try {
    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    const hoursElapsed = parseFloat(task.hoursElapsed);
    const hoursToComplete = parseFloat(task.hoursToComplete);

    if (isNaN(hoursElapsed) || isNaN(hoursToComplete) || hoursToComplete === 0) {
      return res
        .status(400)
        .json({ error: "Invalid hoursElapsed or hoursToComplete" });
    }

    const progressFraction = (hoursElapsed / hoursToComplete).toFixed(2);

    return res.status(200).json({
      message: "Progress calculated successfully",
      task: {
        taskName: task.taskName,
        progressFraction: progressFraction,
      },
    });
  } catch (err) {
    console.error("Error calculating task progress:", err);
    return res.status(500).json({ error: "Failed to calculate progress" });
  }
};