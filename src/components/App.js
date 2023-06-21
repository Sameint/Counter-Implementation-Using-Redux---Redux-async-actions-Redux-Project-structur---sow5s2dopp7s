import React from 'react';
import '../styles/App.css'
import { useDispatch,useSelector } from 'react-redux';
import { INCREMENT, DECREMENT } from '../actions/action';
function App() {
const counter=useSelector((state) =>state.counter);
const dispatch=useDispatch();
  function increMent(){
dispatch({type:INCREMENT})
  }

  function decreMent(){
    dispatch({type:DECREMENT})
  }
  return (
    <div id='main'>
      <h1 data-testid='counter'>{counter}</h1>
      <button onClick={increMent} >+</button>
      <button onClick={decreMent}>-</button>
    </div>
  );
}

export default App;
