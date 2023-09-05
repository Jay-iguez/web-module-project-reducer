import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import {reducer, initialState} from '../reducers/index'
import {applyNumber, changeOperator, clearDisplay} from '../actions/index'

function App() {
  const [calculatorValue, calculatorValueDispatch] = useReducer(reducer, initialState)

  const eventHandler = (num) => {
    calculatorValueDispatch(applyNumber(num)) 
  }

  const operatorHandler = (operator) => {
    calculatorValueDispatch(changeOperator(operator))
  }

  const clearHandler = () => {
    calculatorValueDispatch(clearDisplay())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={calculatorValue.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{calculatorValue.operation}</span>
              <span id="memory"><b>Memory:</b>{calculatorValue.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={eventHandler}/>
              <CalcButton value={2} onClick={eventHandler}/>
              <CalcButton value={3} onClick={eventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={eventHandler}/>
              <CalcButton value={5} onClick={eventHandler}/>
              <CalcButton value={6} onClick={eventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={eventHandler}/>
              <CalcButton value={8} onClick={eventHandler}/>
              <CalcButton value={9} onClick={eventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={operatorHandler}/>
              <CalcButton value={"*"} onClick={operatorHandler}/>
              <CalcButton value={"-"} onClick={operatorHandler}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandler}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
