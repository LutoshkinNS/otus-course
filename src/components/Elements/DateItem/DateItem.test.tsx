import { DateItem } from './DateItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('DateItem', () => {
  it('render DateItem ', () => {
    render(<DateItem date={'10'} />);

    expect(screen.getByTestId('DateItemTest')).toBeInTheDocument();
  });
});
