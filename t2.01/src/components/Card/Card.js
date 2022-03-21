import React, {useState} from "react";
import './Card.css'


const Card = (props) => {
  const [classes, addNewClass] = useState('content__item');
  const clickHandler = (event) => {
    event.target.checked === true ? addNewClass('content__item content__item--red') : addNewClass('content__item'); 
  }

  return (
    <div className={classes}>
      <div className="content__header">
        <h2 className="content__title">{props.title}</h2>
        <input className="content__check" type="checkbox" onClick={clickHandler}></input>
      </div>
      <p className="content__text">{props.text}</p>
    </div>
  );
}

export default Card;