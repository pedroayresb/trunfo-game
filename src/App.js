import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.carDel = this.carDel.bind(this);
    this.filterCardsByName = this.filterCardsByName.bind(this);
    this.filterCardsByRarity = this.filterCardsByRarity.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arrayOfCards: [],
      filter: [],
    };
  }

  onInputChange(event) {
    const { id } = event.target;
    this.setState({ [id]: event.target.value }, () => {
      const maxCard = 90;
      const maxSum = 210;
      const neg = -1;
      const { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage } = this.state;
      const trusum = cardAttr1 <= maxCard && cardAttr2 <= maxCard && cardAttr3 <= maxCard;
      const noNegatives = Math.sign(cardAttr1) !== neg
      && Math.sign(cardAttr2) !== neg
      && Math.sign(cardAttr3) !== neg;
      const cardSum = parseFloat(cardAttr1)
      + parseFloat(cardAttr2)
      + parseFloat(cardAttr3) <= maxSum;
      if (cardName.length > 0
        && cardDescription.length > 0
        && cardImage.length > 0
        && trusum === true
        && noNegatives === true
        && cardSum === true) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { arrayOfCards } = this.state;
    arrayOfCards.push(this.state);
    this.setState({ arrayOfCards,
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
    });
    const finded = arrayOfCards.find((card) => card.cardTrunfo === 'on');
    if (finded !== undefined) {
      this.setState({ hasTrunfo: true });
    }
  }

  carDel(event) {
    const { arrayOfCards } = this.state;
    const { id } = event.target.parentNode;
    arrayOfCards.splice(id, 1);
    const finded = arrayOfCards.find((card) => card.cardTrunfo === 'on');
    if (finded === undefined) {
      this.setState({ hasTrunfo: false });
    }
  }

  filterCardsByName(event) {
    const {
      arrayOfCards,
    } = this.state;
    const { id, value } = event.target;
    const filtered = [];
    console.log(value);
    arrayOfCards.forEach((card) => {
      if (card[id].includes(value)) {
        filtered.push(card);
      }
    });
    if (value.length > 0 && filtered.length === 0) {
      filtered.push({ cardName: 'Carta não encontrada' });
    }
    this.setState({ filter: filtered });
  }

  filterCardsByRarity(event) {
    const {
      arrayOfCards,
    } = this.state;
    const { id, value } = event.target;
    const filtered = [];
    console.log(value);
    if (value === 'todas') {
      filtered.push(...arrayOfCards);
    } else {
      arrayOfCards.forEach((card) => {
        if (card[id] === value) {
          filtered.push(card);
        }
      });
      if (value.length > 0 && filtered.length === 0) {
        filtered.push({ cardName: 'Carta não encontrada' });
      }
    }
    this.setState({ filter: filtered });
  }

  render() {
    const { arrayOfCards, filter } = this.state;
    const cardStack = true;
    let savedCards;
    if (filter.length > 0) {
      savedCards = filter.map((card, i) => (<Card
        { ...card }
        id={ i }
        key={ i }
        cardStack={ cardStack }
        carDel={ this.carDel }
      />));
    } else {
      savedCards = arrayOfCards.map((card, i) => (<Card
        { ...card }
        key={ i }
        id={ i }
        cardStack={ cardStack }
        carDel={ this.carDel }
      />));
    }
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="container">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card { ...this.state } />
        </div>
        <div className="saved-cards">
          <Filter
            onNameInputChange={ this.filterCardsByName }
            onRarityInputChange={ this.filterCardsByRarity }
          />
          {savedCards}
        </div>
      </div>
    );
  }
}

export default App;
