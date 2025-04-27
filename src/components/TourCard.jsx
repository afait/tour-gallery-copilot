import React from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  const handleRemove = (e) => {
    e.preventDefault();
    onRemove(id);
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{info}</p>
        <h3>${price}</h3>
        <button onClick={handleRemove}>Not Interested</button>
      </div>
    </div>
  );
}

export default TourCard;