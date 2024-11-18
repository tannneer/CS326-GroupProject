# Timer Feature Sequence Diagram

This markdown file illustrates the sequence diagram for the Timer feature on the calendar page.

## Description
The Timer feature allows users to track time while working on assignments. Users can:
- Start the timer to begin tracking time, which updates every second.
- Stop the timer to pause tracking.
- Reset the timer to clear the elapsed time.
- Optionally, save the session duration for future reference in IndexedDB, with a confirmation message displayed.

Below is the sequence diagram representing the interactions between the user, timer, and system.

```mermaid
sequenceDiagram
    participant User
    participant Timer
    participant System

    User->>Timer: Clicks "Start"
    Timer->>Timer: Begins counting seconds
    Timer->>System: Updates display every second

    User->>Timer: Clicks "Stop"
    Timer->>Timer: Stops counting

    User->>Timer: Clicks "Reset"
    Timer->>Timer: Resets to 00:00

    User->>Timer: Clicks "Save Session"
    Timer->>System: Save session duration to IndexedDB
    System->>User: Display confirmation message
