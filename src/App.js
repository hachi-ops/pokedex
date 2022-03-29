import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
    const logWhenClicked = () => {
    console.log("clicked");
  };

  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked}/>
      <BestPokemon  abilities = {['Anticipation', 'Adaptability', 'Run-Away']}/>
      <CaughtPokemon todaysDate = {new Date().toLocaleDateString()}/>
    </div>
    );
  }

export default App;
