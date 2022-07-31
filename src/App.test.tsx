import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('App tests', () => {
  let ToggleButton: HTMLButtonElement;
  let DateList: Promise<HTMLUListElement>;
  beforeEach(() => {
    render(<App />);
    ToggleButton = screen.getByTestId('ToggleButtonTest');
    DateList = screen.findByTestId('DateListTest');
  });

  it('should render toggle button', () => {
    expect(ToggleButton).toBeInTheDocument();
    expect(ToggleButton).toHaveTextContent('show');
  });

  it('should show list after click ToggleButton', async () => {
    await userEvent.click(ToggleButton);
    await waitFor(() => expect(DateList).toBeInTheDocument(), { timeout: 5000 });
  });
});
