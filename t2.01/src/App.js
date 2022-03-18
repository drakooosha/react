import React from "react";
import './css/main.css'
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="sr-only">Cards</h1>
        <h2 className="header__title">Header</h2>
      </header>
      <main className="main">
        <section className="content">
          <ul className="content__items">
            <Card />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
