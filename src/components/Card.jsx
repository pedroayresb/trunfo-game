import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      id,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardStack,
      carDel,
    } = this.props;
    return (
      <div className="card" id={ id }>
        <h1 data-testid="name-card">{ cardName }</h1>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <h1 data-testid="description-card">{ cardDescription }</h1>
        <h1 data-testid="attr1-card">{ cardAttr1 }</h1>
        <h1 data-testid="attr2-card">{ cardAttr2 }</h1>
        <h1 data-testid="attr3-card">{ cardAttr3 }</h1>
        <h1 data-testid="rare-card">{ cardRare }</h1>
        {cardTrunfo && <h1 data-testid="trunfo-card">Super Trunfo</h1>}
        {cardStack
          && (
            <button
              type="button"
              data-testid="delete-button"
              onClick={ carDel }
            >
              Excluir
            </button>
          )}
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardStack: PropTypes.bool.isRequired,
  carDel: PropTypes.func.isRequired,
};

export default Card;
