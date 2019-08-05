import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import RestClient from "./RestClient.js";

function App() {
  const [inputLink, setInputLink] = useState("");
  const [createdLink, setCreatedLink] = useState(null);

  const inputChange = ((e) => {
    setInputLink(e.target.value);
  });

  const createLink = (() => {
    let restClient = new RestClient();
    restClient.CreateLink(createLinkCallback, inputLink);
  }); 

  const createLinkCallback = ((response) => {
    setCreatedLink(response);
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
      {createdLink != null &&
        <div>
          <h3>Link Shortened</h3>
          <h4>{window.location.href + createdLink.Id}</h4>
        </div>
      }
    </div>
  );
}

export default App;
