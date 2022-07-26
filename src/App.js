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
    this.setState({ [id]: event.target.value });
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
