# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The project accepts a CSV file that contains four columns with employees IDs, project IDs, start date on project and an optional end date on project that can have a value of null. When a file is inserted the app runs a series of function that transforms the data from the file to a matrix (an Array that contains Arrays), equalizes the dates and set the null dates to todays date. Then it finds all the employees that have worked on a project and sorts them by start date in ascending order. After that finds all the pairs that have worked together by checking if the end date of the employee that has started on the project earlier is after the start date of the next employee. Then it finds how many days each pair has worked together by substracting the end date of the first employee and the start date of the second. After which checks all the pairs if they have worked on other projects together and sums the days and finally sorts them by days wocked together in descending order, and visualizes the first pair/pairs - thee that have worked together the most.  

In the project directory, you can run:

### `npm i react-router-dom`

The react-router-dom package contains bindings for using React Router in web applications.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.