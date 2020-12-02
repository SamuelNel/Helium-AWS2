import React from "react";
import axios from "axios";
import "./App.css";

function Helium(props) {
  return (
    <div className="helium">
      <h3 className="text2">Connect to the Wireless World!</h3>
      <button className="button" onClick={handleClick}>
        Send Command
      </button>
    </div>
  );
}

const handleClick = () => {
  console.log("Button Pushed");
  const api = "https://370nc65kwi.execute-api.us-east-1.amazonaws.com/staging";
  const data = { name: "Mike" };
  axios
    .post(api, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default Helium;
