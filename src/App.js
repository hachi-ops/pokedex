import React from "react";

function App() {
  return (
    <div>
      <Logo/>
      <BestPokemon/>
      <CaughtPokemon/>
    </div>
  );
}

// function Logo() {
//   const appName = "Hachi's Pokemon";
//   return (
//     <div>
//       <header>
//       <h1>Welcome to {appName}</h1>
//     <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
//     </header>
//     </div>
//   );
// }

const Logo = () => {
  const appName = "Helen's Pokemon";
return (
<div>
<header>
<h1>Welcome to {appName}</h1>
<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
</header>
</div>
);
};

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();
   return (
    <p>
  caught 0 pokemon on {date}</p>
  );

};

// const Logo = () => (
//   <div>
//   <header>
//   <h1>Welcome to the Pokedex</h1>
//   <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
//   </header>
//   </div>
// );

// function BestPokemon() {
//   return (
//    <p>My favourite pokemon is not Pidgey</p>
//   );
// }

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
<p>My favourite pokemon is not Pidgey</p>
<uL>
  {abilities.map((name, index) => (
    <li key = {index} > {name}</li>
  ))}
</uL>
    </div>
  );
};

// const BestPokemon = () => (
// <p>My favourite pokemon is not Pidgey</p>
// );

export default App;
