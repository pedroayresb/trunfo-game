import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: '',
      isSaveButtonDisabled: true,
      onSaveButtonClick: false,
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

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="container">
          <Form { ...this.state } onInputChange={ this.onInputChange } />
          <Card { ...this.state } />
        </div>
      </div>
    );
  }
}

export default App;
