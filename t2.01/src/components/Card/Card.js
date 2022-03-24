import React, { useState } from "react";
import "./Card.css";
import CardNav from "./CardNav";

const Card = (props) => {
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [text, setText] = useState(props.text);

  let Newtitle = '';
  let Newtext = '';
  const clickHandler = () => setChecked(!checked);

  const ModeHandler = () => {
    if(checked) clickHandler();
    setEditMode(!editMode);
  };

  const onInputTitleHadler = event => {
    Newtitle = event.target.value;
  }

  const onInputTextHadler = event => {
    Newtext = event.target.value;
  }

  const changeContentHandler = () => {
    setTitle(Newtitle);
    setText(Newtext);
  }
  return (
    <div className={"content__item " + (checked ? "content__item--red" : "")}>
      <div className="content__header">
        {(!editMode && <h2 className="content__title"> {title}</h2>)}
        {(editMode && <input className="content__input content__input--title" type="text" placeholder="Change Title" onChange={onInputTitleHadler}></input>)}
        <CardNav editMode={editMode} inputСhecked={checked} changeMode={ModeHandler} inputClick={clickHandler} onChangeContent={changeContentHandler}/>
      </div>
      {(!editMode && <p className="content__text">{text}</p>)}
      {(editMode && <input className="content__input content__input--text" type="text" placeholder="Change Text" onChange={onInputTextHadler}></input>)}
    </div>
  );
};

export default Card;
