import React, { Component } from "react";

import Validation from "../Validation/Validation";
import Flags from "../assets/resources/flags.json";

const KEY = "6ffa9c9b83cee2b7940de5be46d7d94b";
const API = `http://data.fixer.io/api/latest?access_key=${KEY}&format=1`;

class Card extends Component {
  state = {
    Rates: [],
    amountTop: "",
    amountBottom: "",
    from: "EUR",
    to: "USD",
    isValid: true,
    isLoading: false
  };

  isDecimal = n => n - Math.floor(n) !== 0;

  renderCurrenciesOptions = () => {
    // https://zellwk.com/blog/looping-through-js-objects/
    const Rates = this.state.Rates;
    const options = [];
    const keys = Object.keys(Rates);

    for (let i = 0; i < keys.length; i++) {
      options.push(
        <option key={i} value={keys[i]}>
          {Flags[keys[i]]} {[keys[i]]}
        </option>
      );
    }

    return options;
  };

  isNumberHandler = value => {
    if (isNaN(value)) {
      return false;
    }
    return true;
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        const Rates = data.rates;
        const ref = ["USD", "HKD", "EUR", "GBP", "INR", "AUD", "CAD"];
        const main = {};
        const temp = {};
        for (let key in Rates) {
          if (ref.includes(key)) {
            main[key] = main[key] = Rates[key];
          } else {
            temp[key] = Rates[key];
          }
        }
        main["-------"] = "";
        this.setState({
          Rates: { ...main, ...temp }
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleChange = event => {
    const name = event.target.name;
    let value = event.target.value;
    const Rates = this.state.Rates;
    const update = {};
    update[name] = value;

    if (name !== "from" && name !== "to" && !this.isNumberHandler(value)) {
      update.isValid = false;
      update.amountBottom = this.state.amountBottom;
      update.amountTop = this.state.amountTop;
    } else if (name === "amountTop") {
      update.isValid = true;
      if (value === "") {
        update.amountBottom = "";
      } else {
        update.amountBottom =
          (value / Rates[this.state.from]) * Rates[this.state.to];
        if (this.isDecimal(update.amountBottom)) {
          update.amountBottom = update.amountBottom.toFixed(3);
        }
      }
    } else if (name === "amountBottom") {
      update.isValid = true;
      if (value === "") {
        update.amountTop = "";
      } else {
        update.amountTop =
          (value / Rates[this.state.to]) * Rates[this.state.from];
        if (this.isDecimal(update.amountTop)) {
          update.amountTop = update.amountTop.toFixed(3);
        }
      }
    } else if (name === "from") {
      update.from = value;
      update.isValid = true;
      if (this.state.amountBottom === "" || this.state.amountTop === "") {
        update.amountBottom = "";
      } else {
        update.amountBottom =
          (this.state.amountTop / Rates[value]) * Rates[this.state.to];
        if (this.isDecimal(update.amountBottom)) {
          update.amountBottom = update.amountBottom.toFixed(3);
        }
      }
    } else if (name === "to") {
      update.to = value;
      update.isValid = true;
      if (this.state.amountBottom === "" || this.state.amountTop === "") {
        update.amountBottom = "";
      } else {
        update.amountBottom =
          (this.state.amountTop / Rates[this.state.from]) * Rates[value];
        if (this.isDecimal(update.amountBottom)) {
          update.amountBottom = update.amountBottom.toFixed(3);
        }
      }
    }
    this.setState(update);
  };

  render() {
    return (
      <div className="card">
        <div className="form">
          <div className="form-flex">
            <Validation error={this.state.isValid} />
            <input
              style={{
                boxShadow: !this.state.isValid && "0 0 0 3px red inset"
              }}
              id="amountTop"
              placeholder="1"
              type="text"
              name="amountTop"
              value={this.state.amountTop}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-flex">
            <select
              id="from"
              name="from"
              value={this.state.from}
              onChange={this.handleChange}
            >
              {this.renderCurrenciesOptions()}
            </select>
          </div>
        </div>
        <div id="result">
          <div className="form">
            <div className="form-flex">
              <Validation error={this.state.isValid} />
              <input
                style={{
                  boxShadow: !this.state.isValid && "0 0 0 3px red inset"
                }}
                id="amountBottom"
                placeholder={(
                  (1 / this.state.Rates[this.state.from]) *
                  this.state.Rates[this.state.to]
                ).toFixed(3)}
                type="text"
                name="amountBottom"
                value={this.state.amountBottom}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-flex">
              <select
                id="to"
                name="to"
                value={this.state.to}
                onChange={this.handleChange}
              >
                {this.renderCurrenciesOptions()}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
