import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className={styles.itemsConatiner}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
