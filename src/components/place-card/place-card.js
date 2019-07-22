import React from 'react';

import './place-card.scss';

const PlaceCard = ({ place }) => {
  const {
    name,
    address,
    city,
    state,
    country,
    phone,
    image_url,
    reserve_url,
  } = place;
  return (
    <div className="PlaceCard">
      <div className="img-container">
        <img src={image_url} alt={name} />
      </div>
      <div className="text-content">
        <h5 id="place-name">{name}</h5>
        <p>{address}</p>
        <p>{`${city}, ${state}, ${country}`}</p>
        <p />
        <p>{phone}</p>
        <a href={reserve_url} />
      </div>
    </div>
  );
};

export default PlaceCard;
