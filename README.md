# Course Registration Website

Welcome to the Course Registration Website! This website is designed to help you easily register for courses and manage your academic journey. Below, you'll find information about three key features of the website, and we'll also answer a common question about how state management is handled in our React app.

**Website Link:** [Course Registration Website](course-registration-2062.surge.sh)


## Features

### 1. User-friendly Course Selection && display of what courses are selected and their total credit hours


### 2. Real Time Credit Limit Management


### 3. Toaster Notification System



## Q&A: How State Management is Managed in Our React App

**Q:** How did you manage the state in your React app?

**A:** - **useState Hook:** We utilize the `useState` hook to create and manage state variables. For example, we use it to track selected courses, total credits, and remaining credits.

- **useEffect Hook:** We use the `useEffect` hook to fetch course data when the component mounts and update the `cards` state with the fetched data.

- **Course Selection Logic:** The `handleSelectCourse` function handles course selection and state updates. It checks for duplicate selections, calculates total credits, and ensures that the credit limit is not exceeded. Error messages are displayed using toast notifications for a user-friendly experience.