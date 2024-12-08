import Goal from './goal.js';
import Task from './task.js';


const defineAssociations = () => {
  // Define the one-to-many relationship between Goal and Task
  Goal.hasMany(Task, {
    foreignKey: {
      name: 'goalId', // The name of the foreign key column in the Task table
      allowNull: false, // Ensures tasks cannot exist without an associated goal
    },
    onDelete: 'CASCADE', // Delete all associated tasks when a goal is deleted
    onUpdate: 'CASCADE', // Update tasks if the goal ID changes
  });

  // Define the reverse relationship (many-to-one) from Task to Goal
  Task.belongsTo(Goal, {
    foreignKey: {
      name: 'goalId', // The name of the foreign key column in the Task table
      allowNull: false, // Ensures tasks cannot exist without an associated goal
    },
    onDelete: 'CASCADE', // Ensure referential integrity on deletion
    onUpdate: 'CASCADE', // Ensure referential integrity on update
  });
};


// const defineAssociations = () => { 


// Goal.hasMany(Task, {
//   foreignKey: {
//     name: 'goalId',
//     allowNull: false, 
//   },
//     onDelete: 'CASCADE', // Deletes tasks if a goal is deleted
//     onUpdate: 'CASCADE', // Updates tasks if the goal ID change
// });


 
// Task.belongsTo(Goal, {
//   foreignKey: {
//     name: 'goalId',
//     allowNull: false,

//   },
// });

//}

export default defineAssociations;