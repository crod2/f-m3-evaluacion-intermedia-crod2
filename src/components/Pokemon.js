import React from 'react';

<div className="cards">
  <h2 className="card__name">{poke.name}</h2>
  <img src={poke.url} alt="imagen de pokemons" className="card__img" />
  {poke.types.map((type, index) =>
    <h3 className="card__type" key={index}>{type}</h3>
  )}
</div>

export default Pokemon;