import React, {useState} from "react";
import './Card.css'


const Card = (props) => {
  const [checked, setChecked] = useState(false);
  const clickHandler = () => setChecked(!checked);

  return (
    <div className={'content__item ' + (checked ? 'content__item--red' : '')}>
      <div className="content__header">
        <h2 className="content__title">{props.title}</h2>
        <input className="content__check" type="checkbox" onClick={clickHandler}></input>
      </div>
      <p className="content__text">{props.text}</p>
    </div>
  );
}

export default Card;