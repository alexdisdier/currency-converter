import React, { Component } from "react";

class Menu extends Component {
  state = {
    default: null
  };

  render() {
    return (
      <ul>
        <li>
          <a
            href="http://alexdisdier.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build your Currency Exchange
          </a>
        </li>
      </ul>
    );
  }
}

export default Menu;
