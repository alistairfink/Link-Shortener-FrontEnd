import React, { useState, useEffect } from "react";
import RestClient from "./RestClient.js";
import LoadingSvg from "./loading.svg";
import "./LoadLink.css";

function LoadLink(props) {
  const callback = ((response) => {
    window.location.replace(response.Link);
  });

  useEffect(() => {
    let restClient = new RestClient();
    restClient.GetLink(callback, props.match.params.id);
  }, [callback]);

  return (
    <div className="load-link">
      <img src={LoadingSvg}/>
      <h1>Loading Link</h1>
    </div>
  );
}

export default LoadLink;
