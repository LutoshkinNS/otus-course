import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('App tests', () => {
  let ToggleButton: HTMLButtonElement;
  beforeEach(() => {
    render(<App />);
    ToggleButton = screen.getByTestId('ToggleButtonTest');
  });

  it('should render toggle button', () => {
    expect(ToggleButton).toBeInTheDocument();
    expect(screen.queryByTestId('DateListTest')).not.toBeInTheDocument();
    expect(ToggleButton).toHaveTextContent('show');
  });

  it('should show list after click ToggleButton', async () => {
    expect(ToggleButton).toHaveTextContent('show');
    await userEvent.click(ToggleButton);
    expect(ToggleButton).toHaveTextContent('hide');
    expect(screen.getByTestId('DateListTest')).toBeInTheDocument();
    expect(screen.getByTestId('DateListTest').innerHTML.length).toBeGreaterThan(28);
  });
});
