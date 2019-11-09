import React, { Component } from "react";
import "./App.css";
import Logo from "./components/logo.jsx";
import Input from "./components/input.jsx";
import button from "./components/button.jsx";
import Button from "./components/button.jsx";

const mainColor = "#3fada8";
const windowWidth =
  window.innerWidth > 400 ? 400 + (window.innerWidth * 0.85 - 400) : window.innerWidth;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createEvent = () => {
    alert("Create Event");
  };

  getInfo = () => {
    alert("Get Info");
  };

  render() {
    // const { type, placeholder } = this.props;
    return (
      <div className="App">
        <Logo />
        <Input type={"text"} placeholder={"Name of event"} />
        <Input type={"number"} placeholder={"How long (mins)?"} />
        <Button text={"Create Event"} onClick={this.createEvent} />
        <Button type={"alt"} text={"exactly-what is this?"} onClick={this.getInfo} />
        <p style={styles.credits}>Made by @ralfisalhon & @mohsinrizvi</p>
      </div>
    );
  }
}

const styles = {
  credits: {
    fontSize: 12,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0
  }
};

export default App;
