// import { Sequelize, DataTypes } from "sequelize";
import { Sequelize, DataTypes } from '@sequelize/core';

const sequelize = new Sequelize({
    dialect: "sqlite", // Specify SQLite as the dialect
    storage: "authentication.sqlite", // SQLite database file
  });

// Create a new instance of Sequelize
// In this case, we are using SQLite as our database
// and storing the database in memory for testing purposes.
// const sequelize = new Sequelize("sqlite::memory:");

// Define the User model
export const Goal = sequelize.define("Goal", {
  goalName: { type: DataTypes.STRING, allowNull: false },
  hoursToComplete: { type: DataTypes.INTEGER },
  goalDueDate: { type: DataTypes.DATE },
});

// Create the table if it doesn't exist
await sequelize.sync();


// Export the User model for use in other files
export default Goal;
