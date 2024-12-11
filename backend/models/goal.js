// import { Sequelize, DataTypes } from "sequelize";
import { Sequelize, DataTypes } from '@sequelize/core';
import Task from './task.js';

const sequelize = new Sequelize({
    dialect: "sqlite", 
    storage: "authentication.sqlite", // SQLite database file
  });

// Create a new instance of Sequelize
// In this case, we are using SQLite as our database
// and storing the database in memory for testing purposes.
// const sequelize = new Sequelize("sqlite::memory:");

// Define the User model
export const Goal = sequelize.define("Goal", {
  //goalId : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
  goalName: { type: DataTypes.STRING, allowNull: true },
  goalDueDate: { type: DataTypes.DATE },
  hoursToComplete: { type: DataTypes.INTEGER },

});

await sequelize.sync();

// Export the User model for use in other files
export default Goal;
