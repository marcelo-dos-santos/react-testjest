import React, { useState } from 'react';

const ConditionalRenderComponent: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Esconder Conteúdo' : 'Mostrar Conteúdo'}
      </button>
      {showContent && <p>Este é o conteúdo condicional.</p>}
    </div>
  );
};

export default ConditionalRenderComponent;
