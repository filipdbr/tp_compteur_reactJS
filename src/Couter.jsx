import React from 'react';

// composant a 2 props : onClickAdd et onClickSubtract
const Counter = ({ onClickAdd, onClickSubtract }) => {
  return (
    <div>
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickSubtract}>-</button>
    </div>
  );
};

export default Counter;
