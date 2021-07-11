import React from "react";

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
<p>My favourite pokemon is not Pidgey</p>
<ul>
  {abilities.map((name, index) => (
    <li key = {index} > {name}</li>
  ))}
</ul>
    </div>
  );
};

export default BestPokemon;