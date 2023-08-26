import React from 'react';
import { render } from '@testing-library/react';
import PropsComponent from '../PropsComponent';

test('renderiza as props corretamente', () => {
  const props = {
    name: 'João',
    age: 25
  };

  const { getByText } = render(<PropsComponent {...props} />);

  const nameElement = getByText(`Nome: ${props.name}`);
  const ageElement = getByText(`Idade: ${props.age}`);

  expect(nameElement).toBeInTheDocument();
  expect(ageElement).toBeInTheDocument();
});
