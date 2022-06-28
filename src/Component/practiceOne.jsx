import React, { Component } from "react";
import Button from "@mui/material/Button";

export default class Practiceone extends Component {
  constructor() {
    super();
    this.state = {
      counter: 10,
      start: 0,
    };
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  reset = () => {
    this.setState({ counter: this.state.start });
  };

  componentDidMount() {
    console.log("Mount Called");
    this.setState({ counter: 0 });
    console.log(this.state.counter);
  }
  shouldComponentUpdate() {
    if (this.state.counter > 9) {
      console.log(this.state.counter);
      return false;
    } else {
      console.log(this.state.counter);
      return true;
    }
  }

  render() {
    return (
      <div>
        {this.state.counter} <br></br>
        <Button variant="contained" color="primary" onClick={this.increment}>
          Increment
        </Button>
        <Button variant="contained" color="warning" onClick={this.reset}>
          Reset
        </Button>
      </div>
    );
  }
}
