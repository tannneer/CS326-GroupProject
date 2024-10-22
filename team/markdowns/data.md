# Application Data 

##  Overview

### 1. User Profile

- **Description**: Contains personal information about the user, including login details and preferences.
- **Attributes**:
  - `user_id` (string): A unique identifier for each user.
  - `name` (string): The user's full name.
  - `email` (string): The user's email address.
  - `password` (string): A hashed version of the user's password.
  - `created_at` (timestamp): The date and time when the account was 
    created.
  - `updated_at` (timestamp): The last time the user's profile was updated.
- **Data Source**: User-input data when registering or updating their profile.

### 2. Expense Entry

- **Description**: Tracks individual expense transactions made by the user.
- **Attributes**:
  - `expense_id` (string): A unique identifier for each expense entry.
  - `user_id` (string): The unique identifier for the user associated with the expense.
  - `amount` (float): The amount of money spent.
  - `category` (string): The category of the expense (e.g., groceries, 
    entertainment).
  - `description` (string): A brief description of the transaction.
  - `date` (date): The date the transaction occurred.
  - `created_at` (timestamp): The date and time when the expense was logged.
- **Data Source**: User-input data via the expense logging form.

### 3. Income Entry

- **Description**: Records income received by the user, such as salary or freelance payments.
- **Attributes**:
  - `income_id` (string): A unique identifier for each income entry.
  - `user_id` (string): The unique identifier for the user associated with the income.
  - `amount` (float): The amount of income received.
  - `source` (string): The source of the income (e.g., employer, side gig).
  - `date` (date): The date the income was received.
  - `created_at` (timestamp): The date and time when the income was logged.
- **Data Source**: User-input data via the income logging form.

### 4. Savings Goal

- **Description**: Stores information about a user’s savings goals, 
  including the target amount and progress.
- **Attributes**:
  - `goal_id` (string): A unique identifier for each savings goal.
  - `user_id` (string): The unique identifier for the user associated with the goal.
  - `goal_name` (string): The name or title of the savings goal (e.g., 
    "Vacation Fund").
  - `target_amount` (float): The total amount the user aims to save.
  - `current_amount` (float): The amount saved so far.
  - `target_date` (date): The date by which the user aims to reach the 
    savings goal.
  - `created_at` (timestamp): The date and time when the goal was created.
  - `updated_at` (timestamp): The last time the goal's progress was updated.
- **Data Source**: User-input data via the savings goals form.

### 5. Spending Trend

- **Description**: Represents aggregated spending data, used for visualizing spending trends over time.
- **Attributes**:
  - `user_id` (string): The unique identifier for the user associated with the trend data.
  - `month` (string): The month and year for which the trend data applies.
  - `total_spending` (float): The total spending for the given month.
  - `category_spending` (JSON): A breakdown of spending per category for the given month.
- **Data Source**: System-generated based on user expenses logged over 
  time.

## Data Relationships

- **User to Expense Entry**: One-to-many relationship (a user can have many expense entries).
- **User to Income Entry**: One-to-many relationship (a user can have many income entries).
- **User to Savings Goal**: One-to-many relationship (a user can have many savings goals).
- **Expense Entry to Spending Trend**: Expenses contribute to aggregated spending trend data, which is calculated monthly.

## Data Sources

- **User-Input Data**: Most of the data, including user profiles, expenses, income, and savings goals, will come from direct user input via forms in the application.
- **System-Generated Data**: Spending trends will be automatically 
  calculated by the system based on the expenses logged by users over 
  time.
