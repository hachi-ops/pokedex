// import logo from "./logo.svg";
// import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <Logo/>
      <BestPokemon/>
    </div>
  );
}

function Logo() {
  return (
    <div>
      <header>
      <h1>Welcome to the Pokedex</h1>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
    </header>
    </div>
  );
}

function BestPokemon() {
  return (
   <p>My favourite pokemon is Pidgey</p>
  );
}

export default App;
