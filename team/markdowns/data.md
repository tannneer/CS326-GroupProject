# Application Data 

##  Overview

### 1. User Profile

- **Description**: Contains personal information about the user, including login details and preferences.
- **Attributes**:
  - `name` (string): The user's full name.
  - `email` (string): The user's email address.
  - `password` (string): A hashed version of the user's password.
- **Data Source**: User-input data when registering or updating their profile.

### 2. Goal Entry

- **Description**: Tracks goals made by the user.
- **Attributes**:
  - `goal_id` (string): A unique identifier for a name of a goal.
  - `description_id` (string): The unique identifier for the description associated with the goal.
  - `results_id` (string): The results that the user is looking for associated with the goal.
  - `achieved_id` (boolean): A flag to indicate whether the user achieved the goal or not.
  - `date_id` (date): The date for when the user achieves the goal.
  - `data_achieved_id` (date): The date for when the user wants to achieve the goal.
- **Data Source**: User-input data via the goal logging form.

### 3. Task Entry

- **Description**: Tracks tasks created by the user, associated with goals.
- **Attributes**:
  - `task_id` (string): A unique identifier for the name of the task.
  - `length_id` (string): .
  - `amount_id` (float): The amount of time the task will take.
  - `due_id` (date): The due date associated with the task.
  - `goal_id` (date): The goal that the task is associated with.
  - `created_at` (timestamp): The date and time when the task was logged.
- **Data Source**: User-input data via the task logging page.

### 4. Analytics

- **Description**: Stores information about a user’s progress in regards to their goals, tasks, etc.
- **Attributes**:
  - `progress_id` (boolean): An identifier where if the user is happy, then true, if not, then false.
  - `task_id` (string): A unique identifier for the name of the task, from tasks page.
  - `task_percentage_id` (float): The percentage that a task takes out of all tasks in total.
  - `task_progress_id` (float): The amount of progress associated with a task.
- **Data Source**: Calculated data from user-input listed above/user-input via analytics page.

## Data Relationships

- **User to Goal Entry**: One-to-many relationship (a user can have many goal entries).
- **User to Task Entry**: One-to-many relationship (a user can have many task entries).
- **Task Entry to Analytics**: Tasks contribute to analytics calculation, which is done by software.

## Data Sources

- **User-Input Data**: Most of the data, including user profiles, goals, tasks, etc, will come from direct user input via forms in the application.
- **System-Generated Data**: Analytics trends will be automatically 
  calculated by the system based on the tasks/goals logged by users over 
  time.
