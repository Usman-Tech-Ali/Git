import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClicked = (buttonText) => {
    console.log(buttonText);

    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      setCalVal(eval(calVal));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClicked={onButtonClicked}></ButtonsContainer>
    </div>
  );
}

export default App;
