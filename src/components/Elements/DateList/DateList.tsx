import React from 'react';
import styled from 'styled-components';

interface DateListProps {
  children?: React.ReactNode;
}

const List = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const DateList = ({ children }: DateListProps) => {
  return <List data-testid="DateListTest">{children}</List>;
};
