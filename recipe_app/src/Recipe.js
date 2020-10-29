import React from "react";

export function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="recipe">
      <h1 className="title"> {title} </h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt={title} />
    </div>
  );
}
