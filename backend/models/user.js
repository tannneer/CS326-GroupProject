import { Sequelize, DataTypes } from '@sequelize/core';


// Create a new instance of Sequelize
// In this case, we are using SQLite as our database
// and storing the database in memory for testing purposes.
// const sequelize = new Sequelize("sqlite::memory:");

const sequelize = new Sequelize({
  dialect: "sqlite", 
  storage: "authentication.sqlite", // SQLite database file
});


// Define the User model
export const User = sequelize.define("User", {
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "user" }, // Roles: 'user', 'admin'
});

await sequelize.sync();


// Export the User model for use in other files
export default User;
