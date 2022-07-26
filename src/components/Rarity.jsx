import React from 'react';
import PropTypes from 'prop-types';

class Rarity extends React.Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <div className="rarity-container">
        <label htmlFor="rarity">
          Raridade
          <select
            data-testid="rare-input"
            id="cardRare"
            name="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option name="rarity" id="normal" value="normal">Normal</option>
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
};

export default Rarity;
