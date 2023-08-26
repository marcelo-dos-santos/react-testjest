import { render, screen, fireEvent } from '@testing-library/react';
import ConditionalRenderComponent from '../ConditionalRenderComponent';

describe('See if my element is renderizing ok and change his state', () => {
    it('should render content conditionally', () => {
        render(<ConditionalRenderComponent />)

        expect(screen.queryByText('Este é o conteudo condicional.')).toBeNull();

        const button = screen.getByText('Mostrar Conteúdo');
        fireEvent.click(button);

        expect(screen.getByText('Este é o conteúdo condicional.')).toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.queryByText('Este é o conteúdo condicional')).toBeNull();
    })
})