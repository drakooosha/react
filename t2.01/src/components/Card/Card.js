import React from "react";
import './Card.css'

const Card = (props) => {
  return (
    <div className="content__item">
      <h2 className="content__title">{props.title}</h2>
      <p className="content__text">{props.text}</p>
    </div>
  );
}

export default Card;