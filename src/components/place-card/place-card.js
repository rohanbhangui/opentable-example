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
    reserve_url = '',
    price = null,
  } = place;

  const priceArray = new Array(4);
  priceArray.fill('').fill('accented', 0, (price - 1));

  return (
    <div className="PlaceCard">
      <div className="img-container">
        <img src={image_url} alt={name} />
      </div>
      <div className="text-content">
        <h5 id="place-name">{name}</h5>
        <p>{address}</p>
        <p>{`${city}, ${state}, ${country}`}</p>
        <p>{phone}</p>
        <p id="price">
          { priceArray.map((item, index) => (
            <span className={item} key={index}>$</span>
          ))}
        </p>
        <a href={reserve_url} className="button primary">Reserve Now</a>
      </div>
    </div>
  );
};

export default PlaceCard;
