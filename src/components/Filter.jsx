import React from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import FilterRarity from './FilterRarity';
import Super from './Super';

class Filter extends React.Component {
  render() {
    const {
      onNameInputChange,
      onRarityInputChange,
      onSuperChange,
      trunfoIsChecked,
    } = this.props;
    return (
      <div className="filter">
        <h1>Filtrar Cartas</h1>
        <Name
          datatestid="name-filter"
          onInputChange={ onNameInputChange }
          trunfoIsChecked={ trunfoIsChecked }
        />
        <FilterRarity
          datatestid="rare-filter"
          onInputChange={ onRarityInputChange }
          trunfoIsChecked={ trunfoIsChecked }
        />
        <Super
          datatestid="trunfo-filter"
          onInputChange={ onSuperChange }
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onNameInputChange: PropTypes.func.isRequired,
  onRarityInputChange: PropTypes.func.isRequired,
  onSuperChange: PropTypes.func.isRequired,
  trunfoIsChecked: PropTypes.bool.isRequired,
};

export default Filter;
