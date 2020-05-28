import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  console.log(foods);
  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <FoodBox food={foods} />
    </div>
  );
}

export default App;
