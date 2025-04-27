// // Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked

import React from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  const handleRemove = (e) => {
    e.preventDefault(); // Prevent any default behavior
    onRemove(id); // Call the onRemove function
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