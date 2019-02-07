import React, { Component } from "react";
import "./assets/css/reset.css";
import "./App.css";

import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Card";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <Title />
          <Card />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
