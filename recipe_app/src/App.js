import React, { useEffect, useState } from "react";
import { Recipe } from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = "e4374ea4";
  const APP_KEY = "61618d548bcf3566e0f60c50dea6b191";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => getRecipes(), []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
