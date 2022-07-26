import React from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Description from './Description';
import Attributes from './Attributes';
import Image from './Image';
import Rarity from './Rarity';
import Super from './Super';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    const hsTrunfo = hasTrunfo !== true;
    return (
      <form className="form-container">
        <Name cardName={ cardName } onInputChange={ onInputChange } />
        <Description
          cardDescription={ cardDescription }
          onInputChange={ onInputChange }
        />
        <Attributes
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <Image cardImage={ cardImage } onInputChange={ onInputChange } />
        <Rarity cardRare={ cardRare } onInputChange={ onInputChange } />
        {hsTrunfo && <Super cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />}
        {hasTrunfo && <h1>Você já tem um Super Trunfo em seu baralho</h1>}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.bool.isRequired,
};

export default Form;
