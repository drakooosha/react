import React from "react";
import './App.css'
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <Header headerText="Header"/> 
      <Card title="card" text="card text"/>
    </div>
  );
}

export default App;
