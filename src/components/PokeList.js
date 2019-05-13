import React from 'react';
import Pokemon from './Pokemon'

class PokeList extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <ul className="pokemon__list">
      {pokemon.map((poke) =>
        <li key={poke.id}>
          <Pokemon />
        </li>
      )}
    </ul>
    )
  }
 
}

export default PokeList;