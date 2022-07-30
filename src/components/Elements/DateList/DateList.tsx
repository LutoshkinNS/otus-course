import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export const DateList = ({ children }: Props) => {
  return <ul>{children}</ul>;
};
