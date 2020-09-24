import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Card.scss';

const Card = ({ imageUrl, title, type }) => (
    <div className='card'>
        {imageUrl && <img src={imageUrl} alt={title} className="card__image" />}
        <div className="card__content">
            {title && <h2><strong>Movie Title:</strong> {title}</h2>}
            {type && <div className="card__summary"><p>Type of Movie: {type}</p></div>}
        </div>
    </div>
);

Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
}

export default Card;