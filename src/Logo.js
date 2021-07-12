import React from "react";

// const Logo = () => {
//     const appName = "Helen's Pokemon";
//   return (
//   <div>
//   <header>
//   <h1>Welcome to {appName}</h1>
//   <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
//   </header>
//   </div>
//   );
//   };

function Logo(props) {
  console.log(props);
  // const appName = "Helen's's Pokemon";
  return (
    <div>
      <header>
      <h1>Welcome to {props.appName}</h1>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
    </header>
    </div>
  );
}

  export default Logo;