import React, { Component } from "react";

import "./right.css";

export default class Header extends Component {
  render() {
    return (
      <div className="wrapper_right text-center">
        <div className="row">
          <div className="col-md info_text">
            <p className="mb-0">мы</p>
            <h2 className="display-5 big_text">1</h2>
            <p>на рынке</p>
          </div>
          <div className="col-md info_text">
            <p>гарантируем</p>
            <h2 className="display-5 big_text">50%</h2>
            <p>безопасность</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md info_text">
            <p>календарик за</p>
            <h2 className="display-5 big_text">
              2001<span>г.</span>
            </h2>
            <p>в подарок</p>
          </div>
          <div className="col-md info_text">
            <p>путешествие</p>
            <h2 className="display-5 big_text">597</h2>
            <p>дней</p>
          </div>
        </div>
      </div>
    );
  }
}
