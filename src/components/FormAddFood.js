import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import { Button, Form } from 'react-bootstrap';

const FormAddFood = (props) => {
  let [formButton, setFormButton] = useState(false);
  const [addFood, setAddFood] = useState({
    name: '',
    calories: '',
    image: '',
  });

  const handleButton = () => {
    setFormButton((formButton = !formButton));
  };

  const handleName = (event) => {
    setAddFood({ ...addFood, name: event.target.value });
  };
  const handleCalories = (event) => {
    setAddFood({ ...addFood, calories: event.target.value });
  };
  const handleImage = (event) => {
    setAddFood({ ...addFood, image: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addFoods(addFood);
    setAddFood({
      name: '',
      calories: '',
      image: '',
    });
  };

  if (formButton === false) {
    return (
      <button className="button is-info" onClick={handleButton}>
        Add Food
      </button>
    );
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={props.name}
            onChange={(e) => handleName(e)}
            placeholder="Name of Food"
          />
        </Form.Group>
        <Form.Group controlId="formGroupCalories">
          <Form.Label>Number of Calories</Form.Label>
          <Form.Control
            name="calories"
            value={props.calories}
            type="text"
            placeholder="Number of calories"
            onChange={(e) => handleCalories(e)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="image"
            name="image"
            onChange={(e) => handleImage(e)}
            value={props.image}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormAddFood;
