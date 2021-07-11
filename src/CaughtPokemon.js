import React from "react";

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();
   return (
    <p>caught 0 pokemon on {date}</p>
  );
};

export default CaughtPokemon;