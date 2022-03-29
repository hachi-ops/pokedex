import React from "react";
import { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
    // setCaught((caught) => caught + 1);
    const copyOfCaught = [...caught];
    copyOfCaught.push(["Pokemon Craig"], ["Pokemon Selchuk"]);

    setCaught(copyOfCaught);
  };
  return (
    <div>
      <p>Caught {caught.length} Pokemon on {props.todaysDate}</p>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    <button onClick={catchPokemon}>Increase</button>
    </div>
  );
};

export default CaughtPokemon;