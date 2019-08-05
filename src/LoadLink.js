import React, { useEffect } from "react";
import RestClient from "./RestClient.js";
import LoadingSvg from "./loading.svg";
import "./LoadLink.css";

function LoadLink(props) {
  useEffect(() => {
    let restClient = new RestClient();
    restClient.GetLink((response) => {
    if(!response.Link.startsWith("http")) {
      response.Link = "http://" + response.Link
    }
    window.location = response.Link;
  }, props.match.params.id);
  }, [props]);

  return (
    <div className="load-link">
      <img src={LoadingSvg} alt="loading"/>
      <h1>Loading Link</h1>
    </div>
  );
}

export default LoadLink;
