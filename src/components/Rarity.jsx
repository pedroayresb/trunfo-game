import React from 'react';
import PropTypes from 'prop-types';

class Rarity extends React.Component {
  render() {
    const { cardRare, onInputChange, datatestid } = this.props;
    return (
      <div className="rarity-container">
        <label htmlFor="rarity">
          Raridade
          <select
            id="cardRare"
            name="rarity"
            data-testid={ datatestid }
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option name="rarity" id="normal" value="normal" selected>Normal</option>
            <option name="rarity" id="rare" value="raro">Raro</option>
            <option name="rarity" id="ultrarare" value="muito raro">Muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Rarity.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired,
};

export default Rarity;
