import React from "react";

const BestPokemon = (props) => {

  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((pokemon, index) => (
        <li key={index}>{pokemon}</li>))}
      </ul>
    </div>
  );
};

export default BestPokemon;