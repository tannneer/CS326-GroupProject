import { Sequelize } from "@sequelize/core";
import Task from "./tasks.js"; // Assuming tasks.js defines and exports the Task model

async function getPrioritiesFromDB() {
    /**
     * Retrieve tasks with their priorities and due dates from the database using Sequelize.
     *
     * Returns:
     *   Promise: Resolves to an array of tasks with their id, name, priority, and due date.
     */
    try {
        const tasks = await Task.findAll({
            attributes: ["id", "taskName", "priority", "dueDate"],
            order: [
                [Sequelize.literal(`
                    CASE 
                        WHEN priority = '!!!' THEN 1
                        WHEN priority = '!!' THEN 2
                        WHEN priority = '!' THEN 3
                        ELSE 4
                    END
                `), "ASC"],
                ["dueDate", "ASC"]
            ]
        });

        return tasks.map(task => task.toJSON());
    } catch (error) {
        console.error(`Error fetching tasks: ${error.message}`);
        throw error;
    }
}

function displayPriorities(tasks) {
    /**
     * Display the list of tasks with priorities.
     *
     * Args:
     *   tasks (Array): Array of task objects with id, taskName, priority, and dueDate.
     */
    console.log("\nTask Priorities:");
    tasks.forEach(({ id, taskName, priority, dueDate }) => {
        console.log(`[Priority: ${priority}] ${taskName} (Due: ${dueDate})`);
    });
}

(async () => {
    try {
        const priorities = await getPrioritiesFromDB();
        displayPriorities(priorities);
    } catch (error) {
        console.error(error);
    }
})();
