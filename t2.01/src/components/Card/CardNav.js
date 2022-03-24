import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { GiCancel, GiCheckMark } from "react-icons/gi";
import "./CardNav.css";

const CardButtons = (props) => {
  const changeMode = () => {
    props.changeMode();
  };

  const SaveAndChangeMode = () => {
    props.onChangeContent();
    changeMode();
  };

  if (!props.editMode) {
    return (
      <div className="content__nav">
        <button className="content__edit" onClick={changeMode}>
          <AiFillEdit />
        </button>
        <input
          className="content__check"
          type="checkbox"
          checked={props.inputChecked}
          onChange={props.inputClick}
        ></input>
      </div>
    );
  }

  return (
    <div className="content__btns">
      <button className="content__edit" onClick={SaveAndChangeMode}>
        <GiCheckMark />
      </button>
      <button className="content__edit" onClick={changeMode}>
        <GiCancel />
      </button>
    </div>
  );
};
export default CardButtons;
