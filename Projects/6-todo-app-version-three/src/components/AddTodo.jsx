import { useState, useRef } from "react";
import { IoMdAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setdueDate] = useState("");
  const noOfUpates = useRef(0);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpates.current++;
  // };

  // const handleDateChange = (event) => {
  //   setdueDate(event.target.value);
  //   console.log(`No of Updates = ${noOfUpates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setTodoName("");
    // setdueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row usman-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            // value={todoName}
            placeholder="Enter Todo Here"
            // onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success usman-btn">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
