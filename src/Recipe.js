import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, instructions }) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {Math.round(calories)}</p>
            <p>follow the link for instructions</p>
            <br />
            <a href={instructions}>Instructions</a>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;