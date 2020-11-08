import React, { Component } from "react";
import Main from "../pages/main";
import Header from "../header/header";
import TemplateDb from "../../services/sagirov_service";

import "./App.css";

const service = new TemplateDb();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Header service={service} />
        <Main service={service} />
      </div>
    );
  }
}
