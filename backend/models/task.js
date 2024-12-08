import {Sequelize, DataTypes } from '@sequelize/core';
import Goal from './goal.js';

const sequelize = new Sequelize({
    dialect: "sqlite", 
    storage: "authentication.sqlite", // SQLite database file
  });
  

// Define the User model
export const Task = sequelize.define("Task", {
  taskName: { type: DataTypes.STRING, unique: true, allowNull: false },
  hoursToComplete: { type: DataTypes.STRING },
  dueDate: { type: DataTypes.STRING },
});


// Export the User model for use in other files
export default Task;
