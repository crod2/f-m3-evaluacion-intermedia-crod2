import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {url, name, types} = this.props;
    return (
    <div className="cards">
      <img src={url} alt="imagen de pokemons" className="card__img" />
      <h2 className="card__name">{name}</h2>
      {types.map((type, index) =>
      <h3 className="card__type" key={index}>{type}</h3>
      )}
    </div>)
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
}

export default Pokemon;