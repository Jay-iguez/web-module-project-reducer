import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import {reducer, initialState} from '../reducers/index'
import {applyNumber, changeOperator, clearDisplay, setMemory, clearMemory, selectDigits, clearDigits} from '../actions/index'

function App() {
  const [calculatorValue, calculatorValueDispatch] = useReducer(reducer, initialState)

  const applyHandler = (num) => {
    calculatorValueDispatch(selectDigits(String(num)))
  }

  const equalHandler = () => {
    calculatorValueDispatch(applyNumber(parseInt(calculatorValue.digits === '' ? 0 : calculatorValue.digits)))
    calculatorValueDispatch(clearDigits())
  }

  const operatorHandler = (operator) => {
    
    if (calculatorValue.digits === ''){
      calculatorValueDispatch(changeOperator(operator))
    } else {
      calculatorValueDispatch(applyNumber(parseInt(calculatorValue.digits)))
      calculatorValueDispatch(clearDigits())
      calculatorValueDispatch(changeOperator(operator))
    }
  }

  const mrHandler = () => {
    calculatorValueDispatch(applyNumber(calculatorValue.memory))
    calculatorValueDispatch(clearDigits())
  }

  const clearAllHandler = () => {
    calculatorValueDispatch(clearDisplay())
  }

  const memoryHandler = () => {
    calculatorValueDispatch(setMemory())
    calculatorValueDispatch(clearDigits())
  }

  const clearMemoryHandler = () => {
    calculatorValueDispatch(clearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={calculatorValue.digits === '' ? calculatorValue.total : calculatorValue.digits}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{calculatorValue.operation}</span>
              <span id="memory"><b>Memory:</b>{calculatorValue.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={memoryHandler}/>
              <CalcButton value={"MR"} onClick={mrHandler}/>
              <CalcButton value={"MC"} onClick={clearMemoryHandler}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={applyHandler}/>
              <CalcButton value={2} onClick={applyHandler}/>
              <CalcButton value={3} onClick={applyHandler}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={applyHandler}/>
              <CalcButton value={5} onClick={applyHandler}/>
              <CalcButton value={6} onClick={applyHandler}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={applyHandler}/>
              <CalcButton value={8} onClick={applyHandler}/>
              <CalcButton value={9} onClick={applyHandler}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={operatorHandler}/>
              <CalcButton value={"*"} onClick={operatorHandler}/>
              <CalcButton value={"-"} onClick={operatorHandler}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"="} onClick={equalHandler}/>
              <CalcButton value={"CE"} onClick={clearAllHandler}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
