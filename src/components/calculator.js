import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calc() {
  const [presentState, newState] = useState({ total: 0, next: null, operation: null });
  const mouseClick = (event) => {
    newState((presentState) => calculate(presentState, event.target.textContent));
  };
  return (
    <>
      <div className="main">
        <div className="screen">
          {presentState.total}
          {presentState.operation}
          {presentState.next}
        </div>
        <div className="buttons">
          <div className='lines'>
          <button type="button" onClick={mouseClick} className="grey">AC</button>
          <button type="button" onClick={mouseClick} className="grey">+/-</button>
          <button type="button" onClick={mouseClick} className="grey">%</button>
          <button type="button" onClick={mouseClick} className="orangBtn grey">÷</button>
          </div>
          <div className='lines'>
          <button type="button" onClick={mouseClick} className="grey">7</button>
          <button type="button" onClick={mouseClick} className="grey">8</button>
          <button type="button" onClick={mouseClick} className="grey">9</button>
          <button type="button" onClick={mouseClick} className="orangBtn grey">x</button>
          </div>
          <div className='lines'>
          <button type="button" onClick={mouseClick} className="grey">4</button>
          <button type="button" onClick={mouseClick} className="grey">5</button>
          <button type="button" onClick={mouseClick} className="grey">6</button>
          <button type="button" onClick={mouseClick} className="orangBtn grey">-</button>
          </div>
          <div className='lines'>
          <button type="button" onClick={mouseClick} className="grey">1</button>
          <button type="button" onClick={mouseClick} className="grey">2</button>
          <button type="button" onClick={mouseClick} className="grey">3</button>
          <button type="button" onClick={mouseClick} className="orangBtn grey">+</button>
          </div>
          <div className='lines'>
          <button type="button" onClick={mouseClick} className="zero grey">0</button>
          <button type="button" onClick={mouseClick} className="grey">.</button>
          <button type="button" onClick={mouseClick} className="orangBtn grey">=</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Calc;
