import React from 'react';
import ReactDOM from 'react-dom/client';
import InformationForm from './App'; // Import the InformationForm component from App.jsx

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
-ReactDOM.createRoot -  is a method which creates a "root" to render your React component tree

-document.getElementById('root') is a standard JavaScript method that retrieves an element from the DOM with 
the ID root

-The root element is typically an empty <div> element in your index.html file where your React application 
will be rendered. This is the entry point for your React app in the HTML page

*/
root.render(
  <React.StrictMode>
    <InformationForm />
  </React.StrictMode>
);

/*

React.StrictMode is a valuable tool for React developers that helps identify and address potential 
problems/issues in their code during development, leading to more reliable and maintainable applications.

In order to use it you have to wrap the component tree (or part of it) with React.StrictMode in ther main.jsx 
(or index.js in some setups)

When you run your application in development mode, React.StrictMode activates additional checks and warnings.


*/
