import React, { Component } from "react";

import "./left.css";

export default class Left extends Component {
  render() {
    return (
      <div className="wrapper_left">
        <div className="wrapp_header">
          <h1 className="display-4">Путешествие</h1>
          на красную планету
        </div>
        <div className="wrapp_btn">
          <button className="btn"> Начать путешествие</button>
        </div>
      </div>
    );
  }
}
