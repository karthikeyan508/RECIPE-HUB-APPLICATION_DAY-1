import React, { useState } from 'react';

const FavoriteImage = ({ Briyaniurl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <div>
      <img src={Briyaniurl} alt="Briyani" />
      <button onClick={handleFavoriteToggle}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      {isFavorite && <p>This image is a favorite!</p>}
    </div>
  );
};

export default FavoriteImage;
