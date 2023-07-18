import React, { useState } from 'react';
// import Navbar from './navbar';
// import "./styled.css"

const Recipe = ({ name, ingredients, instructions }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Ingredients:</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Instructions:</p>
      <ol>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

const FavoriteRecipe = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const recipe = {
    name: 'Delicious Pasta',
    ingredients: ['Pasta', 'Tomato Sauce', 'Garlic', 'Olive Oil', 'Basil'],
    instructions: [
      'Boil the pasta in salted water until al dente.',
      'In a separate pan, heat olive oil and sauté minced garlic.',
      'Add tomato sauce to the pan and simmer for 10 minutes.',
      'Drain the pasta and toss it in the sauce.',
      'Garnish with fresh basil and serve hot.'
    ]
  };

  return (
    <div>
      <h2>My Favorite Recipe</h2>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      {isFavorite && <Recipe {...recipe} />}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Add Recipe </h1>
      <FavoriteRecipe />
    </div>
  );
};

export default App;
