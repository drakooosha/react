import React, {useState} from "react";
import './App.css'
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const [defaultTitle,setDefaultTitle] = useState("Card");
  const [defaultText,setDefaultText] = useState("Card Text");

  const setValuesHandler = (title,text)=> {
    setDefaultTitle(title);
    setDefaultText(text);
  }

  return (
    <div className="container">
      <Header headerText="Header"/> 
      <Card defaultTitle={defaultTitle} defaultText={defaultText} onSubmit={setValuesHandler}/>
    </div>
  );
}

export default App;
