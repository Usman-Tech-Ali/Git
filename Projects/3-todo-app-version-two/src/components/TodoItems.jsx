import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
function TodoItems({ todoItems }) {
  return (
    <div className={styles.itemsConatiner}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
