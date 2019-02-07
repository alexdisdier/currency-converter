import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

class Header extends Component {
  state = {
    default: null
  };

  render() {
    return (
      <header>
        <div className="wrapper flex">
          <Logo />
          <Menu />
        </div>
      </header>
    );
  }
}

export default Header;
