// models/timer.js
import { Sequelize, DataTypes } from '@sequelize/core';
import Task from './task.js'; // Import Task for foreign key reference

// Initialize Sequelize for SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'authentication.sqlite', // Path to SQLite database
});

// Define the Timer model
export const Timer = sequelize.define('Timer', {
  // Start time when the timer begins
  startTime: { 
    type: DataTypes.DATE, 
    allowNull: false, // Start time is required
  },
  // End time when the timer stops
  endTime: { 
    type: DataTypes.DATE 
  },
  // Foreign key linking the timer to a specific task
  taskId: { 
    type: DataTypes.INTEGER,
    allowNull: false, // Every timer must be associated with a task
    references: { model: Task, key: 'id' }, // Link to Task model
  },
});

// Ensure the Timer model is synchronized with the database
await sequelize.sync();

export default Timer;
