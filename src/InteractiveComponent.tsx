import React, { useState } from 'react';

const InteractiveComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
};

export default InteractiveComponent;
