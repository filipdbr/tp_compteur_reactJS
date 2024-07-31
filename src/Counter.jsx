import React from 'react';

// composant a 2 props : onClickAdd et onClickSubtract
// les props sont ajoutés dans App en utilisant des boutons
const Counter = ({ onClickAdd, onClickSubtract }) => {
  return (
    <div>
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickSubtract}>-</button>
    </div>
  );
};

export default Counter;
