import React from "react";

const BestPokemon = (props) => {
console.log(props);
  return (
    <div>
<p>My favourite pokemon is not Pidgey</p>
<ul>
  {props.abilities.map((name, index) => (
    <li key = {index} > {name}</li>
  ))}
</ul>
    </div>
  );
};

export default BestPokemon;