import {render, screen} from '@testing-library/react'
import SimpleComponent from '../SimpleComponent'

describe('See if title and paragraph appears', () => {
    it('should appear the title', () => {
        render(<SimpleComponent />)

        const title = screen.getByText(/Meu Título/i);
        expect(title).toBeInTheDocument();
    });

    it('should appear the paragraph', () => {
        render(<SimpleComponent />)

        const paragraph = screen.getByText(/este é um parágrafo de texto./i);
        expect(paragraph).toBeInTheDocument();
    })
}) 