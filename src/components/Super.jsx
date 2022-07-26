import React from 'react';
import PropTypes from 'prop-types';

class Super extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <div className="checkbox-container">
        <label htmlFor="trunfo-check">
          Super Trybe Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Super.propTypes = {
  cardTrunfo: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Super;
