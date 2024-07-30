import React, { useState } from 'react';
import Counter from './Couter';
import './App.css';

function App() {

  // état initial : la valeur de compteur = 0
  const [count, setCount] = useState(0);

  // les fonctions changeant l'état (+ et -)
  const onClickAdd = () => setCount(count + 1);
  const onClickSubtract = () => setCount(count - 1);

  // affichage
  return (
    <div>
      <h1>Compteur: {count}</h1>
      <Counter onClickAdd={onClickAdd} onClickSubtract={onClickSubtract} />
    </div>
  );
};

export default App;
