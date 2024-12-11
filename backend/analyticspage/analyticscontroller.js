import Task from "../models/task.js";

export const taskProgressController = async (req, res) => {
  const { taskId } = req.body; // Only the taskId is needed in the request

  try {
    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    const { completedSteps, totalSteps } = task;

    if (isNaN(completedSteps) || isNaN(totalSteps) || totalSteps === 0) {
      return res
        .status(400)
        .json({ error: "Invalid data for completedSteps or totalSteps" });
    }

    // Calculate the percentage of completion
    const completionPercentage = ((completedSteps / totalSteps) * 100).toFixed(2);

    return res.status(200).json({
      message: "Completion percentage calculated successfully",
      task: {
        taskName: task.taskName,
        completionPercentage: `${completionPercentage}%`,
      },
    });
  } catch (err) {
    console.error("Error calculating task completion:", err);
    return res.status(500).json({ error: "Failed to calculate task completion" });
  }
};