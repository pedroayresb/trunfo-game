import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section className="form-container">
        <div className="name-container">
          <label htmlFor="name">
            Nome
            <input type="text" data-testid="name-input" id="name" />
          </label>
        </div>
        <div className="description-container">
          <label htmlFor="description">
            Descrição
            <input type="textarea" data-testid="description-input" id="description" />
          </label>
        </div>
        <div className="atributes-container">
          <label htmlFor="attributes1">
            Attr01
            <input type="number" data-testid="attr1-input" id="attributes1" />
          </label>
          <label htmlFor="attributes2">
            Attr02
            <input type="number" data-testid="attr2-input" id="attributes2" />
          </label>
          <label htmlFor="attributes3">
            Attr03
            <input type="number" data-testid="attr3-input" id="attributes3" />
          </label>
        </div>
        <div className="image-container">
          <label htmlFor="card-img">
            Image
            <input type="text" data-testid="image-input" id="card-img" />
          </label>
        </div>
        <div className="rarity-container">
          <label htmlFor="rarity">
            Raridade
            <select data-testid="rare-input" id="rarity" name="rarity">
              <option name="rarity" id="normal" value="normal">Normal</option>
              <option name="rarity" id="rare" value="rare">Raro</option>
              <option name="rarity" id="ultrarare" value="ultrarare">Muito raro</option>
            </select>
          </label>
        </div>
        <div className="checkbox-container">
          <label htmlFor="trunfo-check">
            Super Trybe Trunfo
            <input type="checkbox" data-testid="trunfo-input" id="trunfo-check" />
          </label>
        </div>
        <button type="submit" data-testid="save-button">Salvar</button>
      </section>
    );
  }
}

export default Form;
