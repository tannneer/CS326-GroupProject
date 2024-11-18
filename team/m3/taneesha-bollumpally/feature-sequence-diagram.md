```mermaid
flowchart TD;
    A[User clicks "Start" button] --> B[Timer begins counting seconds]
    B --> C[Display updates every second]
    A1[User clicks "Stop" button] --> D[Timer stops updating]
    A2[User clicks "Reset" button] --> E[Timer resets to 00:00]
    C -->|Session Completed| F[User clicks "Save Session"]
    F --> G[Session duration saved to IndexedDB]
    G --> H[Confirmation message displayed]

