# UI Diagrams
## Landing Screen
The **Landing Screen** is the first screen users will see after clicking the url to the  application. The layout is designed to provide a quick overview of the objective of what the web application is meant to do, the origin of the app and the creator’s mission. The landing page  will display an ‘About Us’ section and a ‘Log-in/Sign-up’ button.

![image](https://github.com/user-attachments/assets/35feab2b-7d18-41c9-a2ca-b2d782d9f24c)


On this screen, users can interact with 2 main elements:
1. **About Us’ Section:** A short paragraph defining the purpose of the app, the origin and the creators mission.
2. **‘Log-in/Sign-up’ button:** Allowing users to Log-in their account or to sign up for an account

**Use Case**:
A user who wants to check out ‘TimeBank’, their first impression will be the landing page that consists of the ‘About Us’ paragraph discussing the purpose of the app. Once the user figures out the app can see themselves using the app they will click the ‘Log-in/Sign-up’ button to make an account/access their account. 

## Log-in/Sign-up Screen

The **Log-in/Sign-up** Screen is designed to be simple and intuitive, allowing users to quickly input their email and password to log in or sign up. 

![image](https://github.com/user-attachments/assets/9b5e09cf-b5a0-42c0-a951-fd738d59343d)


On this screen, users can interact with 2 main elements:
1. **Sign-up/Login fields** Users can fill out the fields to create/log-in their account.
2. **Sign-up button:** After Users fill out the feilds they can click the button to officially make an account.

The layout of this screen is kept minimal to avoid overwhelming the user. The form will be centered on the screen, with clearly labeled fields and a prominent "Sign Up" button at the bottom. After having an account, users will be led to the “Goals & Task” page. 

The form also includes input validation to ensure that all required fields are completed before submission. If any required fields are missing, the user will receive an error message prompting them to correct the issue.

**Use Case:**
A user who decides to make an account to use TimeBanks’s services would navigate to this screen and fill out the ‘Email’, ‘Password’ and click the “Sign Up” button.



## Goals and Tasks Page: 
![image](https://github.com/user-attachments/assets/cedbe3ef-de91-4b03-be2f-62b34081eebb)

1. Schedule Section (Left Side):
Week Labels (M, T, W, T, F, S, S): These labels represent the days of the week (Monday through Sunday).
Input Fields: Each day has an input field where users can enter their plans or activities for that specific day. This allows them to see an overview of their weekly schedule.
2. Tasks Section (Right Side):
Task List: Users can manage their tasks here. Each task is displayed with:
Task Name: An input field for users to specify the task.
Length: Indicates the duration or estimated time required to complete the task. 
Due Date: Users input the due date for their task . 
Remove Button: Provides the option to remove a task from the list.
Add New Task Button: At the bottom of the task list, there is a button labeled “Add new task” that allows users to add more tasks as needed.
3. Generate Schedule Button (Bottom Right):
Purpose: After adding tasks and filling in the weekly schedule, users can click this button to automatically integrate their tasks into their weekly plan. It helps to optimize their time by fitting tasks into the available slots in their schedule.
## Calendar Screen: 
The **Calendar Screen** provides a clear, intuitive interface for users to view and manage their schedules. Users can filter the view by day, week, month, or year and navigate to other pages using the navigation bar. This screen ensures that users can stay organized and seamlessly switch between pages, such as updating goals or tasks.

![image](https://github.com/user-attachments/assets/65cb9cd6-6e9d-423f-9ec6-39f8a30da620)


On this screen, users can interact with 3 main elements:
1. **Nav Bar:** Users can use the navigation bar at the top to access other parts of the app (e.g., Goals & Tasks page).
2. **Date Bar:** Users can filter the calendar view by day, week, month, or year to customize how they see their schedule.
2. **Calendar:** The main calendar area displays the user’s tasks, events, or goals for the selected period. The layout will dynamically adjust based on the date filter selected.


**Use Case:**
A user who fills out information in the “Goals & Tasks page”  and clicks the “Generate Schedule” button will be navigated to the Calendar page , they select a button on the  Date Bar, and the calendar refreshes to display only the events for that date. Noticing they forgot to add an task, the user clicks the Nav Bar and navigates to the Goals & Tasks page to make the necessary update. After completing the update, they return to the Calendar Screen to confirm the changes and review their schedule again.
## Analytics page: 
![image](https://github.com/user-attachments/assets/09c92f8a-a0dd-4914-9eae-970091321c3e)

1. Completed Tasks (Top Left):
Checklist Representation: A visual list of tasks with checkboxes. Completed tasks have their boxes checked, while any incomplete tasks remain unchecked.
Purpose: This section provides users with a quick overview of the tasks they have finished and those that are still pending. 
2. Time Spent on Tasks (Bottom Left):
Clock Icon: This represents time management.
Purpose: Complements data shown on the pie chart as a whole, this offers insight into how much time users have dedicated to their various tasks over a period.
3. Spending Distribution (Center):
Pie Chart: The central pie chart shows the distribution of different time for different tasks with their percentages..
Purpose: This visualizes the breakdown of the user’s time or effort across different categories, helping them understand where they are focusing most of their energy.
4. Progress Reflection (Top Right):
Feedback Question: "Are you happy with your progress?" is accompanied by three emoji options:
Green Smile: Indicates satisfaction with progress.
Yellow Neutral Face: Indicates a moderate or mixed feeling.
Red Sad Face: Indicates dissatisfaction.
Purpose: Allows users to reflect on their progress and log their satisfaction levels, possibly for self-assessment or tracking mood in relation to productivity.
5. Task Progress Bars (Bottom Right):
Progress Bars for Tasks: Each task has an associated progress bar showing how close the user is to completing it.
Purpose: These bars give users a visual representation of their advancement in specific tasks, helping them gauge how much more effort or time is needed for completion.
