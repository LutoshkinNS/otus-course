import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button components', () => {
  it('render Button', () => {
    render(<Button>button</Button>);

    expect(screen.getByTestId('ButtonTest')).toBeInTheDocument();
  });
});
