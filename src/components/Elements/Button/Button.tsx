import styled from 'styled-components';
import React from 'react';

const ButtonEl = styled.button`
  width: 100px;
  height: 40px;
  background: none;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
`;

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <ButtonEl data-testid={'ButtonTest'}>{children}</ButtonEl>;
};
