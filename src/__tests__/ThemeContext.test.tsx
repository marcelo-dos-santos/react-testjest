import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeContext';

test('altera o tema quando o botão é clicado', () => {
    const TestComponent: React.FC = () => {
        const { theme, toggleTheme } = useTheme();
        return(
            <div>
                <button onClick={toggleTheme}>
                    {theme === 'light' ? ' Switch to Dark Theme' : 'Switch to Light Theme'}
                </button>
            </div>
        );
    };

    const { getByText } = render(
        <ThemeProvider>
            <TestComponent />
        </ThemeProvider>
    );

    const button = getByText('Switch to Dark Theme');
    fireEvent.click(button);

    expect(button.textContent).toBe('Switch to Light Theme');
});
