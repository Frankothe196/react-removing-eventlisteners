//Lets make use of some React Hooks
import React, { useEffect, useRef, useState } from "react";

import logo from './logo.svg';
import './App.css';

//Lets create a component to add into the default react boilerplate app
const SampleComponent = () => {
  // In react we can use the useRef hook to keep track on a component after render
  const myRef = useRef();

  //Lets add a state variable to keep track of when we click outside the referenced button
  const [clickedOutside, setClickedOutside] = useState(false);

  //Lets create a function to change state when click
  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
    }
  };

  const handleClickInside = () => setClickedOutside(false);

  //Now heres the bit we need to pay some attention in react it is good practice to remove event listeners  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // on unmount, the return statement runs will ensure the eventlistener is removed
    return () => document.removeEventListener("mousedown", handleClickOutside);
  },[]);

  return (
    <button ref={myRef} onClick={handleClickInside}>
      {clickedOutside ? "Bye!" : "Hello!"}
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         We added an event listener just to show how the should be removed. <br/> You dont always need to used and addEventListener.
         Read more below
        </p>
        <a
          className="App-link"
          href="https://reactjs.org/docs/handling-events.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span className="App-link">
          Click inside and outside the button below
        </span>
        <SampleComponent/>
      </header>
    </div>
  );
}

export default App;





