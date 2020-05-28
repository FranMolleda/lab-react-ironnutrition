import React, { useState } from 'react';
import 'bulma/css/bulma.css';

const FoodBox = (props) => {
  const allFoods = props.food;
  const [food, setFood] = useState(allFoods);
  return (
    <div>
      {food.map((eachFood, index) => (
        <div className="column is-half" key={index}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={eachFood.image} alt="foodImg" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{eachFood.name}</strong> <br />
                  <small>{eachFood.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default FoodBox;
