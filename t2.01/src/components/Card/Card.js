import React, { useState } from "react";
import "./Card.css";
import { AiFillEdit } from "react-icons/ai";
import { GiCancel, GiCheckMark } from "react-icons/gi";

const Card = (props) => {
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(props.defaultTitle);
  const [text, setText] = useState(props.defaultText);

  const clickHandler = () => setChecked(!checked);

  const editHandler = () => {
    if(checked) setChecked(!checked); 
    setEditMode(!editMode);
  };

  const submitHandler = () => {
    props.onSubmit(title,text);
    setEditMode(!editMode);
  };

  const cancelHandler = () => {
    setTitle(props.defaultTitle);
    setText(props.defaultText);
    setEditMode(!editMode);
  };

  const titleInputHandler = event => {
    setTitle(event.target.value);
  }

  const textInputHandler = event => {
    setText(event.target.value);
  }
  return (
    <div className={"content__item " + (checked ? "content__item--red" : "")}>
      {editMode ? (
        <div className="content__header">
          <input
            className="content__input content__input--title"
            type="text"
            placeholder="Change Title"
            value={title}
            onChange={titleInputHandler}
          ></input>
          <div className="content__nav">
            <button className="content__edit" onClick={submitHandler}>
              <GiCheckMark />
            </button>
            <button className="content__edit" onClick={cancelHandler}>
              <GiCancel />
            </button>
          </div>
        </div>
      ) : (
        <div className="content__header">
          <h2 className="content__title">{title}</h2>
          <div className="content__nav">
            <button className="content__edit" onClick={editHandler}>
              <AiFillEdit />
            </button>
            <input className="content__check" type="checkbox" onChange={clickHandler}></input>
          </div>
        </div>
      )}
      {editMode ? (
        <input
          className="content__input content__input--text"
          type="text"
          placeholder="Change Text"
          value={text}
          onChange={textInputHandler}
        ></input>
      ) : (
        <p className="content__text">{text}</p>
      )}
    </div>
  );
};

export default Card;
