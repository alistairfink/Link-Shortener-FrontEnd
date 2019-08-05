import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './Main.css';
import RestClient from "./RestClient.js";
import LoadingSvg from "./loading.svg";

function Main() {
  const [inputLink, setInputLink] = useState("");
  const [createdLink, setCreatedLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  const linksCallback = ((response) => {

  });

  useEffect(() => {
    let restClient = new RestClient();
    // restClient.GetLink(linksCallback, props.match.params.id);
  }, [linksCallback]);

  const inputChange = ((e) => {
    setInputLink(e.target.value);
  });

  const createLink = (() => {
    setLoading(true);
    let restClient = new RestClient();
    restClient.CreateLink(createLinkCallback, inputLink);
  }); 

  const createLinkCallback = ((response) => {
    setLoading(false);
    setCreatedLink(response);
  });

  const createLinkEnter = ((e) => {
    if(e.keyCode == 13) {
      createLink();
    }
  });

  return (
    <div className="Main">
      <input type="text" value={inputLink} onChange={inputChange} onKeyDown={createLinkEnter} />
      <button onClick={() => createLink()}>Submit</button>
      {loading &&
        <div>
          <img src={LoadingSvg}/>
          <h3>Loading Link</h3>
        </div>
      }
      {createdLink != null &&
        <div>
          <h3>Link Shortened</h3>
          <h4>{window.location.href + createdLink.Id}</h4>
        </div>
      }
    </div>
  );
}

export default Main;
