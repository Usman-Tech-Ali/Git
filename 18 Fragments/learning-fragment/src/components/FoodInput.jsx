import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  //   const handleKeyDown = (event) => {
  //     console.log(event.target.value);
  //   };

  return (
    <input
      type="text"
      placeholder="Enter food Item here "
      className={styles.foodInput}
      onKeyDown={handleKeyDown}></input>
  );
};
export default FoodInput;
