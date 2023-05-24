import React, { Component, useEffect, useState } from "react";
import Loader from "./Loader";
import PropTypes from "prop-types";

const Item = (props)=>{
  const [state, setState] = useState({articles : [], loading : true})

const getResp = async () => {
    props.setProgress(10)
    console.log('working')
    document.title = String(props.category).charAt(0).toUpperCase()+String(props.category).substr(1)
    let response = await fetch(
      `https://inshorts.deta.dev/news?category=${props.category}`
    );
    props.setProgress(50)
    let data = await response.json();
    console.log(data.data);
    props.setProgress(70)
    setState({ articles: data.data, loading: false });
    props.setProgress(100)
    return ;
}

 useEffect(()=> {
    
    getResp()
  },[])


    return (
      <div
        className={`row d-flex justify-content-center bg-${props.mode}`}
      >
        {state.loading && <Loader />}
        {state.articles.map((elem) => {
          return (
            <div
              key={elem.id}
              className={`card m-3 text-${
                props.mode === "light" ? "dark" : "light border-white"
              }  bg-${props.mode}`}
              style={{ width: "18rem" }}
            >
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{elem.time}<span className="visually-hidden">unread messages</span>
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

Item.propTypes = {
  mode: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
  date: PropTypes.string,
};

export default Item