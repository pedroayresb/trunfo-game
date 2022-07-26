import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <div className="image-container">
        <label htmlFor="card-img">
          Image
          <input
            type="text"
            data-testid="image-input"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Image.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Image;
