function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row usman-row">
        <div className="col-6">
          <input placeholder="Enter Todo Here"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success usman-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
