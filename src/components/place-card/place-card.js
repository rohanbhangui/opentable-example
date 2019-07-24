import React from 'react';

import './place-card.scss';

const PlaceCard = ({ place }) => {
  const {
    name = '',
    address = '',
    city = '',
    state = '',
    country = '',
    phone = '',
    image_url = 'https://placehold.it/200x200',
    reserve_url = '#',
    price = 1,
  } = place;

  const priceArray = new Array(4);
  priceArray.fill('').fill('active', 0, (price - 1));

  return (
    <div className="PlaceCard">
      <div className="img-container">
        <img src={image_url} alt={name} tabIndex="0" />
      </div>
      <div className="text-content">
        <h5 id="place-name" tabIndex="0">{name}</h5>
        <div tabIndex="0">
          <p>{address}</p>
          <p>{`${city}, ${state}, ${country}`}</p>
        </div>
        <p tabIndex="0">{phone}</p>
        <p tabIndex="0" id="price">
          { priceArray.map((type, index) => (
            <span className={type} key={index}>$</span>
          ))}
        </p>
        <a tabIndex="0" href={reserve_url} className="button primary">Reserve Now</a>
      </div>
    </div>
  );
};

export default PlaceCard;
