import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputLink, setInputLink] = useState("");

  const inputChange = ((e) => {
    setInputLink(e.target.value);
  });

  const createLink = (() => {
    console.log(inputLink)
  }); 

  const createLinkEnter = ((e) => {
    if(e.keyCode == 13) {
      createLink();
    }
  });

  return (
    <div className="App">
      <input type="text" value={inputLink} onChange={inputChange} onKeyDown={createLinkEnter} />
      <button onClick={() => createLink()}>Submit</button>
    </div>
  );
}

export default App;
