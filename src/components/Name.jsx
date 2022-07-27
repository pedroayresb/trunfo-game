import React from 'react';
import PropTypes from 'prop-types';

class Name extends React.Component {
  render() {
    const { cardName, onInputChange, datatestid, trunfoIsChecked } = this.props;
    return (
      <div className="name-container">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="cardName"
            data-testid={ datatestid }
            value={ cardName }
            onChange={ onInputChange }
            disabled={ trunfoIsChecked }
          />
        </label>
      </div>
    );
  }
}

Name.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired,
  trunfoIsChecked: PropTypes.bool.isRequired,
};

export default Name;
