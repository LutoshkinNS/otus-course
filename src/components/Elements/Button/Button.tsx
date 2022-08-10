import styled from 'styled-components';
import React from 'react';

const ButtonEl = styled.button`
  width: 100px;
  height: 40px;
  background: none;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const { children, onClick, ...other } = props;
  return (
    <ButtonEl data-testid="ButtonTest" onClick={onClick} {...other}>
      {children}
    </ButtonEl>
  );
};
