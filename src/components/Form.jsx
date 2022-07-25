import React from 'react';
import PropTypes from 'prop-types';

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
    return (
      <section className="form-container">
        <div className="name-container">
          <label htmlFor="name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="description-container">
          <label htmlFor="description">
            Descrição
            <input
              type="textarea"
              data-testid="description-input"
              id="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="atributes-container">
          <label htmlFor="attributes1">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              id="attributes1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attributes2">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              id="attributes2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attributes3">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              id="attributes3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="image-container">
          <label htmlFor="card-img">
            Image
            <input
              type="text"
              data-testid="image-input"
              id="card-img"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="rarity-container">
          <label htmlFor="rarity">
            Raridade
            <select
              data-testid="rare-input"
              id="rarity"
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
        <div className="checkbox-container">
          <label htmlFor="trunfo-check">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="trunfo-check"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </section>
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
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
