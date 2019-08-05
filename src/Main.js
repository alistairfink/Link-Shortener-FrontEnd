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
    setLinks(response);
  });

  useEffect(() => {
    let restClient = new RestClient();
    restClient.GetLinks(linksCallback, 10);
  }, []);

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
      <h1>Shorten Links</h1>
      <div className="Input">
        <input type="text" value={inputLink} onChange={inputChange} onKeyDown={createLinkEnter} />
        <button onClick={() => createLink()}>Submit</button>
      </div>
      {loading &&
        <div className="Result">
          <img src={LoadingSvg}/>
          <h3>Loading Link</h3>
        </div>
      }
      {createdLink != null &&
        <div className="Result">
          <h3>Link Shortened</h3>
          <h4>{window.location.href + createdLink.Id}</h4>
        </div>
      }
      <div className="Link-Table">
        <h3>Links</h3>
        <table>
          <tr className="Link-Table-Headers">
            <td>Shortened Url</td>
            <td>Link</td>
          </tr>
          {links.map((item) => 
            <tr>
              <td className="Link-Table-Left">{window.location.href + item.Id}</td>
              <td className="Link-Table-Right">{item.Link}</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}

export default Main;
