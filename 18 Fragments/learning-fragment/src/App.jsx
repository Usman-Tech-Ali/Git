// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["Daal", "Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`Current Value of textState:${textToShow}`);

  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([
    "Salad",
    "Green Vegetables",
    "Roti",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      event.target.value = "";
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMsg items={foodItems}></ErrorMsg>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above is list of healthy foods that are good for your health and your
          well being
        </p>
      </Container> */}
    </>
  );
}

export default App;
