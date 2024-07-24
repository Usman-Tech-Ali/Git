import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButtonClicked }) => {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being bought`);
  // };
  return (
    <li className={`${styles["Ua-btn"]} list-group-item ${bought && "active"}`}>
      <span className={`${styles["Ua-span"]}`}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonClicked(event)}>
        Buy
      </button>
    </li>
  );
};
export default Item;
