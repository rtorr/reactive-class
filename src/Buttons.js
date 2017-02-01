import React from 'react';
import { connect } from 'react-redux'
import { add, subtract } from './actions/index'

let Buttons = ({dispatch}) => {

  return (
      <div>
        <button onClick={e => dispatch(add())}>Add</button>
        <button onClick={e => dispatch(subtract())}>Subtract</button>
      </div> 
    );
}

Buttons = connect()(Buttons)

export default Buttons;
