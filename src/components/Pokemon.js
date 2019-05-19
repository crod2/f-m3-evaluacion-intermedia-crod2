import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { url, name, types } = this.props;
    return (
      <div className="cards">
        <img src={url} alt={name} className="card__img" />
        <h2 className="card__name">{name}</h2>
        <ul className="card__list">
          {types.map((type, index) =>
            <li className="list__type" key={index}>{type}</li>
          )}
        </ul>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
}

export default Pokemon;