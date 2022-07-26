import React from 'react';
import PropTypes from 'prop-types';

class Name extends React.Component {
  render() {
    const { cardName, onInputChange } = this.props;
    return (
      <div className="name-container">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="name-input"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Name.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Name;
