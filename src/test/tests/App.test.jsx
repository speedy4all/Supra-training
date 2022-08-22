import React from 'react';
import { render, screen, fireEvent, waitFor } from "../utils";
import App from '../../App';
import { act } from 'react-dom/test-utils';

describe('<App />', () => {
    it('should render component', async () => {
        expect.assertions(3);

        render(<App />);

        const aboutBtn = screen.getByRole('button', { name: 'About' });

        expect(aboutBtn).toBeInTheDocument();
        expect(aboutBtn).toHaveAttribute('class', 'btn-list');
        expect(aboutBtn).toBeVisible();
    });

    it('should navigate to list', async () => {
        expect.assertions(2);

        render(<App />);

        const listBtn = screen.getByRole('button', { name: 'List' });

        act(() => {
            fireEvent.click(listBtn);
        });
        
        await waitFor(() => {
            const table = screen.getByRole('table', { name: 'Users'});
            const nameHeader = screen.queryByText('Name');

            expect(table).toBeInTheDocument();
            expect(nameHeader).toBeInTheDocument();
        });
    });
});