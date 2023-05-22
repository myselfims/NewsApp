import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/05_may/17_wed/img_1684333526156_952.jpg?" className="d-block" width={1000} height={300} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" className="d-block" width={1000} height={300} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" className="d-block" width={1000} height={300} alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
