import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App() {

  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const todaysDate = new Date().toLocaleDateString();

    function logWhenClicked() {
      console.log("hello");
      return null;
  }

  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon  abilities = {abilities}/>
      <CaughtPokemon todaysDate = {todaysDate}/>
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
    );
  }

export default App;
