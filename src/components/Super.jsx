import React from 'react';
import PropTypes from 'prop-types';

class Super extends React.Component {
  render() {
    const { cardTrunfo, onInputChange, datatestid } = this.props;
    return (
      <div className="checkbox-container">
        <label htmlFor="trunfo-check">
          Super Trybe Trunfo
          <input
            type="checkbox"
            id="cardTrunfo"
            data-testid={ datatestid }
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
  datatestid: PropTypes.string.isRequired,
};

export default Super;
