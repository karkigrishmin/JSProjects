import React, { useEffect, useState } from "react";
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
    console.log(data);
  };

  return (
    <div className="App">
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
