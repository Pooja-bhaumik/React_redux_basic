import React from "react";
import "./App.css";
import { incNumber, decNumber } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const mystate = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container text-center">
        <h4 className="display-4 pb-4">Increment/decrment counter</h4>
        <h4>Using react redux</h4>
        <div className="quantity">
          <a
            className="quantity_minus"
            title="decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input text-center"
            value={mystate}
          />
          <a
            className="quantity_plus"
            title="increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
