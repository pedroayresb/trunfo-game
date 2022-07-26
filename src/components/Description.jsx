import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <div className="description-container">
        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            data-testid="description-input"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Description.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Description;
