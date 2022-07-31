import { DateList } from './DateList';
import { DateItem } from '../DateItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('DateList', () => {
  it('render DateList ', () => {
    render(
      <DateList>
        <DateItem date={'Jul 10'} />
      </DateList>
    );

    expect(screen.getByTestId('DateListTest')).toBeInTheDocument();
  });
});
