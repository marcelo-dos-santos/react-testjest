import React from 'react';

interface Props {
  name: string;
  age: number;
}

const PropsComponent: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
    </div>
  );
};

export default PropsComponent;