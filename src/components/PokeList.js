import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <ul className="pokemon__list">
      {pokemon.map((poke) =>
        <li key={poke.id}>
          <Pokemon url={poke.url} name={poke.name} types={poke.types}/>
        </li>
      )}
      </ul>
    )
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object)
}

export default PokeList;