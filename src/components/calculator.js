import React from 'react';
import calculate from '../logic/calculate';

function Calc() {
  return (
    <div className="main">
      <div className="screen">0</div>
      <div className="buttons">
        <div className="lines">
          <button type="button" className="grey">
            Ac
          </button>
          <button type="button" className="grey">
            +/-
          </button>
          <button type="button" className="grey">
            %
          </button>
          <button type="button" className="orangBtn grey">
            ÷
          </button>
        </div>
        <div className="lines">
          <button type="button" className="grey">
            7
          </button>
          <button type="button" className="grey">
            8
          </button>
          <button type="button" className="grey">
            9
          </button>
          <button type="button" className="orangBtn grey">
            X
          </button>
        </div>
        <div className="lines">
          <button type="button" className="grey">
            4
          </button>
          <button type="button" className="grey">
            5
          </button>
          <button type="button" className="grey">
            6
          </button>
          <button type="button" className="orangBtn grey">
            -
          </button>
        </div>
        <div className="lines">
          <button type="button" className="grey">
            1
          </button>
          <button type="button" className="grey">
            2
          </button>
          <button type="button" className="grey">
            3
          </button>
          <button type="button" className="orangBtn grey">
            +
          </button>
        </div>
        <div className="lines">
          <button type="button" className="zero grey">
            0
          </button>
          <button type="button" className="grey">
            .
          </button>
          <button type="button" className="orangBtn grey">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calc;
