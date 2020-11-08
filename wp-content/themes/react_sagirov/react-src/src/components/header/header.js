import React, { Component } from "react";

import "./header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      data: [],
    };
  }

  componentDidMount() {
    this.setState(() => {
      this.props.service.getMedia().then((response) => {
        return this.setState({ img: response.source_url });
      });
      this.props.service.getMenu().then((res) => {
        return this.setState({ data: res });
      });
    });
  }

  renderMenu(data) {
    const { items } = data;
    let menu;
    if (data && data.items) {
      menu = items.map((item) => {
        return (
          <li className="nav-item" key={item.id}>
            <a className="nav-link" href={item.url}>
              {item.title}
            </a>
          </li>
        );
      });
    }
    return menu;
  }

  render() {
    const { img, data } = this.state;
    const menu = this.renderMenu(data);
    return (
      <div className="header_wrapper">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">
              <img
                alt="logo"
                src={img}
                loading="lazy"
                className="d-inline-block align-top"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-lg-auto">{menu}</ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
