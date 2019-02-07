import React, { Component } from "react";

class Logo extends Component {
  state = {
    default: null
  };

  render() {
    return (
      <a
        id="logo"
        href="https://twitter.com/AlexDisdier"
        alt="Twitter Account"
        target="_blank"
        rel="noopener noreferrer"
      >
        @alexdisdier
      </a>
    );
    // return <img src={logo} alt="XE Logo" />;
  }
}

export default Logo;
