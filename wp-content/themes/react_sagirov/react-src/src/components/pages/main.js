import React, { Component } from "react";
import renderHTML from "react-render-html";
import { Spinner } from "react-bootstrap";
// import Left from "../left/left";
// import Right from "../right/right";

import "./main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      posts: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.props.service
        .getPosts()
        .then((response) => {
          this.setState({ loading: false, posts: response });
        })
        .catch((error) => {
          this.setState({ error: true, loading: false });
        });
    });
  }

  isLoading(loading) {
    if (!loading) {
      return;
    }
    return <Spinner animation="grow" variant="warning" />;
  }
  isError(error) {
    if (!error) {
      return;
    }
    return (
      <div className="card text-white bg-danger mb-3">
        <div className="card-header">ERROR</div>
        <div className="card-body">
          <h4 className="card-title">Произошла ошибка</h4>
          <p className="card-text">
            Произошла ошибка в загрузке файлов. Пожалуйста, повторите позднее
          </p>
        </div>
      </div>
    );
  }

  render() {
    const { posts, loading, error } = this.state;
    const spinner = this.isLoading(loading),
      isErr = this.isError(error);
    return (
      <div className="container" style={{ paddingTop: 100 }}>
        {spinner}
        {isErr}
        <div className="row justify-content-between m-auto">
          {posts.map((post) => {
            return <div key={post.id}>{renderHTML(post.content.rendered)}</div>;
          })}
        </div>
      </div>
    );
  }
}
