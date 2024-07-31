import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputEle = useRef();

  const handleIncement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputEle.current.value));
    inputEle.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputEle.current.value));
    inputEle.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncement}>
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}>
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}>
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter a number"
          className="number-input"
          ref={inputEle} // Correctly apply the ref to the input element
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
