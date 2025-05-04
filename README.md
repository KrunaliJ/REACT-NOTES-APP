# REACT-NOTES-APP
please check the branch called my-new-branch which is below the main branch 



# REACT-NOTES-APP using react.js

The React-Notes-App is a lightweight, user-friendly web application built with React that allows users to create, manage, and set reminders for personal notes. It offers a clean UI and interactive features like dark mode, note deletion, and desktop notifications to enhance productivity and Useability.

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

*overlook of output:
![Screenshot (1)](https://github.com/user-attachments/assets/f1b30fda-cc1b-4968-b052-d142675f6e9e)

*Working of set reminder: 1) Enter the reminder date as shown below
![Screenshot (3)](https://github.com/user-attachments/assets/4e7c81a5-bd16-4bd4-bc8f-cce1ca3dd52b)

2) Enter reminder time as shown below:
![Screenshot (4)](https://github.com/user-attachments/assets/8b49712d-75d4-4208-8cc6-047b10d741bc)

3)after setting the date and time click on the okay:
![Screenshot (5)](https://github.com/user-attachments/assets/66443f2d-ab6a-4b05-a658-6ef1afef1709)

4)save the note
in this way the note is been saved along with a reminder set to particular date and time 

*You can also search for particular note using the search bar :just enter the note that you want to search in the search bar 
![Screenshot (6)](https://github.com/user-attachments/assets/7baa7ad6-44eb-4f38-b4ce-ad8fe1f3c3a5)
