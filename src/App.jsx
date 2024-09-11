import React, { useState } from "react";
import './styles.css';

/*
useState: This is a named import from the React library. useState is a React Hook, and hooks are special 
functions that let you "hook into" React features, such as state management and lifecycle methods, in 
functional components 

useState Function:

-useState allows you to add state to functional components. State is a way to store and manage data that can 
 change over time and is used to control how a component behaves and renders.

When you call useState, it returns an array with two elements:

-The current state value: This represents the current value of the state variable.

-A function to update the state: You can use this function to change the state, which will trigger a re-render 
 of the component with the new state value.
_____________________________________________________
 a function behind useState:
 const useState = (state) => {
  let currSTate = state;

  const setState = (newState) => {
    currState = newState;}
  };

  return [currState, setState];
____________________________________________________

state is the data that the component can hold in the period of time;
it is a components memory card

*/




const InformationForm = () => { //InformationForm is acomponent
  const [name, setName] = useState(""); //data, that will be remembered by this function when it'll get it.
  const [phone, setPhone] = useState("");// default value is empty firld ("")
  const [email, setEmail] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  

  const validate = () => { //validation function inside the component
    const error = "error";
    const namePattern = /^[A-Za-z]+$/;
    const phonePattern = /^\+(\d{1,4})\s?(\d{4,14})$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if (namePattern.test(name)) {
      setNameMessage("The name is accepted");
    } else {
      setNameMessage(error);
    }

    if (phonePattern.test(phone)) {
      setPhoneMessage("The phone number is accepted");
    } else {
      setPhoneMessage(error);
    }

    if (emailPattern.test(email)) {
      setEmailMessage("The email is accepted");
    } else {
      setEmailMessage(error);
    }
  };

  

  return ( //result that will be rendered to the web page
    <div className="container">
      <h1>Main Information</h1>

      <h2>Name</h2>
      <input
        type="text"
        placeholder="name"
        value={name} //default name value
        onChange={(e) => setName(e.target.value)} //updated name value
        /*
        The onChange attribute is an event handler in React that gets triggered whenever the value of an 
        input field changes 
        
        (e): This is the event object that is automatically passed to the function whenever an event occurs. 
        It contains information about what happened, including details about the element that triggered the 
        event (in this case, the input field).

        e.target: This refers to the element that triggered the event. Here, e.target is the input field where 
        the change happened.

        e.target.value: This is the current value inside the input field. For example, if the user typed 
        "Hello", then e.target.value would be "Hello".

        setName(e.target.value): This is a function call that updates the state variable name to the current 
        value of the input field. setName is the function that updates the state, which you previously defined 
        using useState.


        When a user types into the input field, the onChange event triggers, running the function 
        (e) => setName(e.target.value). This function takes the new value from the input field 
        (e.target.value) and updates the state variable name with this new value using the setName function.
        */

        /*
           What Happens:
          -The user types into the input box.
          -onChange fires, and (e) => setName(e.target.value) is executed.
          -The function takes the current value of the input and updates the name state.
          -React re-renders the component, and the displayed name updates to reflect the new input.
        
        */
      />
      <div className={`message ${nameMessage === "error" ? "error" : ""}`}>
        {nameMessage}
      </div>

      <h2>Phone number</h2>
      <input
        type="tel"
        placeholder="phone"
        value={phone} //default phone field value
        onChange={(e) => setPhone(e.target.value)} //updated phone value
      />
      <div className={`message ${phoneMessage === "error" ? "error" : ""}`}>
        {phoneMessage} 
      </div> 

      <h2>Email</h2>
      <input
        type="email"
        placeholder="email"
        value={email} //default email value
        onChange={(e) => setEmail(e.target.value)} //updated email value
      />
      <div className={`message ${emailMessage === "error" ? "error" : ""}`}> 
        {emailMessage}
      </div>

      <button onClick={validate}>Validate</button>
    </div>
  );
};

export default InformationForm;
/*
export - exports only fubction

export default - exports the function and all the important data related to it's working process without
giving access to it for user
*/

