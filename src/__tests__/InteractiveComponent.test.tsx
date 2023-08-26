import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InteractiveComponent from '../InteractiveComponent';

describe("Verify if the count is updated after clicking the button", () => {
    it('should the count be 0', () => {
        render(<InteractiveComponent />)
        const count = screen.getByText("Contagem: 0");
        expect(count).toBeInTheDocument();
    });

    it('should increment the count after clicking the button', () => {
        render(<InteractiveComponent />)
        const count = screen.getByText("Contagem: 0");

        const button = screen.getByRole('button', { name: /Incrementar/i });
        fireEvent.click(button);

        expect(count.textContent).toBe('Contagem: 1');
    });
});
