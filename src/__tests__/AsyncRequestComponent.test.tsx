import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AsyncRequestComponent from '../AsyncRequestComponent';

describe('AsyncRequestComponent', () => {
    it('Should display API data', async () => {
        render(<AsyncRequestComponent />)

        await waitFor(() => screen.getByText('Dados da API:'));

        expect(screen.getByText('Dados da API:')).toBeInTheDocument();
    })
})