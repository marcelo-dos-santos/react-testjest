import { render, screen, fireEvent } from '@testing-library/react';
import FormComponent from '../FormComponent';

describe('Testing the formulary', () => {
    it('should the formulary appears', () => {
        const component = <FormComponent />;
        expect(component).toBeTruthy();
    })
    
    it('should the formulary be functional and appears success message after submission', () => {
        const component = render(<FormComponent />);
        const inputName = screen.getByLabelText(/Nome/i);
        const inputEmail = screen.getByLabelText(/E-mail/i);
        const button = screen.getByRole('button', {name: /Enviar/i});

        fireEvent.change(inputName, {value: "Johnny"});
        fireEvent.change(inputEmail, {email: "johnny@gmail.com"});

        fireEvent.click(button);

        const sucessMessage = screen.getByText('Formulário enviado com sucesso!');
        expect(sucessMessage).toBeInTheDocument();
    })
})