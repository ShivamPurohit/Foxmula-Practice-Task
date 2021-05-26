import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from "react-redux";
import { incNumber } from "./actions/index";

export const App = () => {
  const myState = useSelector((state) => state.increaseNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
      <div>
      <button className="counter__button" onClick={ () => dispatch(incNumber())}>Click Me</button>
      </div>
      <div>
      <input name="count__value" type="text" className="input__count" value={myState} />
      </div>
      </div>
    </div>
  )
}

export default App