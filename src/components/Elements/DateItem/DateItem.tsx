import { FC } from 'react';

export const DateItem: FC = () => {
  const date = new Date().getDate();

  return <div data-testid="DateItemTest">{date}</div>;
};
