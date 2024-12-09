// import { Sequelize, DataTypes } from "sequelize";
import { Sequelize, DataTypes } from '@sequelize/core';

const sequelize = new Sequelize({
    dialect: "sqlite", 
    storage: "authentication.sqlite", // SQLite database file
  });

// Create a new instance of Sequelize
// In this case, we are using SQLite as our database
// and storing the database in memory for testing purposes.
// const sequelize = new Sequelize("sqlite::memory:");

// Define the User model
export const Priority = sequelize.define("Priority", {
  //goalId : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
  priorityName: { type: DataTypes.STRING, allowNull: true },
  priorityDueDate: { type: DataTypes.DATE },
  priorityLevel : { type: DataTypes.STRING, allowNull: true}
});

await sequelize.sync();



// Export the User model for use in other files
export default Priority;
