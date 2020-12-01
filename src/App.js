import React, { Component } from "react";
import "./App.css";

import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Button Pushed");
    this.getDataAxios();
  }

  getDataAxios() {
    const api =
      "https://370nc65kwi.execute-api.us-east-1.amazonaws.com/staging";
    const data = { name: "Mike" };
    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    /*

    const response = await axios.post(
      "https://console.helium.com/api/v1/down/d9804ab8-4597-4120-93ce-604e06e2b011/mH5J_JuND0P4M_vUTVyYfz4X11v0JiOz",
      {
        payload_raw: "SGVsbG8sIHdvcmxkIQ==",
        port: 1,
        confirmed: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );*/

    //console.log(response.data);
  }

  render() {
    return (
      <div className="button__container">
        <button className="button" onClick={this.handleClick}>
          Click Me
        </button>
        <p>{this.state.username}</p>
      </div>
    );
  }
}
export default App;
