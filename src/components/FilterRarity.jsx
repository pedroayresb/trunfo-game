import React from 'react';
import PropTypes from 'prop-types';

class FilterRarity extends React.Component {
  render() {
    const { cardRare, onInputChange, datatestid, trunfoIsChecked } = this.props;
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
            disabled={ trunfoIsChecked }
          >
            <option name="rarity" id="todos" value="todas" selected>Todas</option>
            <option name="rarity" id="normal" value="normal">Normal</option>
            <option name="rarity" id="rare" value="raro">Raro</option>
            <option name="rarity" id="ultrarare" value="muito raro">Muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

FilterRarity.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired,
  trunfoIsChecked: PropTypes.bool.isRequired,
};

export default FilterRarity;
