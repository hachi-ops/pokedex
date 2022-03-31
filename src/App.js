import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
    const logWhenClicked = () => {
    console.log("clicked");
  };
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const todaysDate = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked}/>
      <BestPokemon  abilities = {abilities}/>
      <CaughtPokemon todaysDate = {todaysDate}/>
    </div>
    );
  }

export default App;
