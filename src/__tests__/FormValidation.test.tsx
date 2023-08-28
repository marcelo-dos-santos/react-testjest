import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormValidation from '../FormValidation';

describe('FormValidation', () => {
  it('exibe mensagens de erro para campos em branco', () => {
    const { getByText } = render(<FormValidation />);
    const submitButton = getByText('Submit');

    fireEvent.click(submitButton);

    expect(getByText('Name is required')).toBeInTheDocument();
    expect(getByText('Email is required')).toBeInTheDocument();
    expect(getByText('Password is required')).toBeInTheDocument();
  });

  it('exibe mensagens de erro para campos preenchidos incorretamente', () => {
    const { getByLabelText, getByText } = render(<FormValidation />);
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'pass' } });
    fireEvent.click(submitButton);

    expect(getByText('Invalid email format')).toBeInTheDocument();
    expect(getByText('Password must be at least 6 characters long')).toBeInTheDocument();
  });
});
