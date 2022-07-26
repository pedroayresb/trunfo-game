import React from 'react';
import PropTypes from 'prop-types';

class Attributes extends React.Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3, onInputChange } = this.props;
    return (
      <div className="atributes-container">
        <label htmlFor="attributes1">
          Attr01
          <input
            type="number"
            data-testid="attr1-input"
            id="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attributes2">
          Attr02
          <input
            type="number"
            data-testid="attr2-input"
            id="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attributes3">
          Attr03
          <input
            type="number"
            data-testid="attr3-input"
            id="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Attributes.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Attributes;
