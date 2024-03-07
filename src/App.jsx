import './App.css'
import { increment, decrement, reset, addValue } from "./store.js";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react"


function App() {

  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector(state => state.value);

  useEffect(() => {
    document.title = `Counter is ${counter}`
  })

  const onCounterAdd = () => {
    dispatch(increment())
  };

  const onCounterDelete = () => {
    dispatch(decrement())
  };

  const onCounterReset = () => {
    dispatch(reset())
  };

  const handleAddValueButton = (event) => {
    event.preventDefault()
    dispatch(addValue(value))
    setValue(0)
  }

  return (
    <div className="container">
      <div className="counter">
        <p>{counter}</p>
      </div>
      <div className="buttons-container">
        <button className="btn" onClick={() => onCounterAdd()}>+</button>
        <button className="btn" onClick={() => onCounterDelete()}>-</button>
        <button className="btn" onClick={() => onCounterReset()}>reset</button>
      </div>
      <form>
        <div className="buttons-container">
          <input type="number" value={value} onChange={(event) => setValue(event.target.value)}></input>
          <button className="btn" onClick={handleAddValueButton}>add value</button>
        </div>
      </form>

    </div>
  )

}

export default App
