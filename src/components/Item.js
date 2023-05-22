import React, { Component } from "react";
import Loader from "./Loader";
import PropTypes from "prop-types";

export default class Item extends Component {
  static propTypes = {
    mode: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    date: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }
  
  async componentDidMount() {
    document.title = String(this.props.category).charAt(0).toUpperCase()+String(this.props.category).substr(1)
    let response = await fetch(
      `https://inshorts.deta.dev/news?category=${this.props.category}`
    );
    let data = await response.json();
    console.log(data.data);
    this.setState({ articles: data.data, loading: false });
  }

  render() {
    return (
      <div
        className={`row d-flex justify-content-center bg-${this.props.mode}`}
      >
        {this.state.loading && <Loader />}
        {this.state.articles.map((elem) => {
          return (
            <div
              key={elem.id}
              className={`card m-3 text-${
                this.props.mode === "light" ? "dark" : "light border-white"
              }  bg-${this.props.mode}`}
              style={{ width: "18rem" }}
            >
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{elem.time}<span class="visually-hidden">unread messages</span>
              </span>
              <img
                src={elem.imageUrl}
                height="150px"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{elem.title}</h5>
                <p>
                  <strong>{elem.author}</strong>
                </p>
                <p>{elem.date}</p>
                <p className="card-text">{elem.content.slice(0, 236)}...</p>
                <a
                  href={elem.url}
                  target="_blank"
                  className="btn btn-sm btn-primary"
                >
                  Read more
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
