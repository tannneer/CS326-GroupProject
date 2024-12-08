import { Sequelize } from '@sequelize/core';
import Goal from './goal.js';
import Task from './task.js';
import defineAssociations from './associations.js';

const sequelize = new Sequelize({
    dialect: "sqlite", 
    storage: "authentication.sqlite", // SQLite database file
  });


// Establish relationships
defineAssociations();

(async () => {
    try {
      await sequelize.sync({ force: true });
      console.log('Database synchronized');
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  })();
  

export { sequelize, Goal, Task };
