import React from "react";
import axios from "axios";
class Entry extends React.Component {
    state = { username: '' };

    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (

    <div className="helium">
      <h3 className="text2">Connect to the Wireless World!</h3>
      <form>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        </form>
      <button className="button" onClick={this.handleClick}>
        Send {this.state.username}
      </button>
    </div>
        
      );
    }

    handleClick(){
        console.log("Button Pushed");
        const api = "https://370nc65kwi.execute-api.us-east-1.amazonaws.com/staging";
        const data = { name: this.state.username};
        axios
          .post(api, data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  }

  export default Entry;