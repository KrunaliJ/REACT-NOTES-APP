# REACT-NOTES-APP using react.js

The React-Notes-App is a lightweight, user-friendly web application built with React that allows users to create, manage, and set reminders for personal notes. It offers a clean UI and interactive features like dark mode, note deletion, and desktop notifications to enhance productivity and usability.

Key Features Explained
*Add Notes
Users can type and save short notes (up to 200 characters). This is handled through the AddNote component using React’s useState hook for real-time input management.

*Delete Notes
Each note can be instantly deleted using the trash icon. The Note component uses an icon from react-icons to trigger deletion via a passed handleDeleteNote function.

*Set Reminders
Users can set a reminder for a note by entering a custom date and time. The app calculates the delay and, if permission is granted, triggers a browser notification at the scheduled time.

*Toggle Dark Mode
The Header component includes a button that toggles between light and dark themes. This uses a function passed from a parent component to dynamically change the app's appearance.

*Timestamp Display
Each note displays the date it was created, helping users track their thoughts and tasks over time.

This project demonstrates the use of React functional components, state management with hooks, user prompts, and browser APIs (for notifications), wrapped in a clean, intuitive interface.

overlook of output:
![Screenshot (1)](https://github.com/user-attachments/assets/f1b30fda-cc1b-4968-b052-d142675f6e9e)
