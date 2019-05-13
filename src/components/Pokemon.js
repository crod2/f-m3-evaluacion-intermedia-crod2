import React from 'react';

class Pokemon extends React.Component {
  render() {
    const {name, url, types} = this.props;
    return (
    <div className="cards">
      <h2 className="card__name">{name}</h2>
      <img src={url} alt="imagen de pokemons" className="card__img" />
      {types.map((type, index) =>
      <h3 className="card__type" key={index}>{type}</h3>
      )}
    </div>)
  }
}



export default Pokemon;