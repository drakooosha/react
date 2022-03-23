import React, {useState} from "react";
import { AiFillEdit } from "react-icons/ai";
import { GiCancel,GiCheckMark } from "react-icons/gi";
import './Card.css'


const Card = (props) => {
  const [checked, setChecked] = useState(false);
  const clickHandler = () => setChecked(!checked);

  return (
    <div className={'content__item ' + (checked ? 'content__item--red' : '')}>
      <div className="content__header">
        <h2 className="content__title" contentEditable="true" suppressContentEditableWarning="true">{props.title}</h2>
        <div className="content__nav">
        <button className="content__edit"><AiFillEdit /></button>
        <input className="content__check" type="checkbox" onClick={clickHandler}></input>
        </div>
      </div>
      <p className="content__text" contentEditable="true" suppressContentEditableWarning="true">{props.text}</p>
    </div>
  );
}

export default Card;