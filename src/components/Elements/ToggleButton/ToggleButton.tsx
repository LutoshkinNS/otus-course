import React from 'react';
import { Button } from '../Button';
import styled from 'styled-components';

const Icon = styled.div<{ primary: boolean | undefined }>`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: ${(props) => (props.primary ? '#018502' : '#e00000')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Check = styled.div`
  display: inline-block;
  width: 6px;
  height: 12px;
  margin: 0 0 3px;
  border: solid white;
  border-width: 0 3px 3px 0;
  border-radius: 2px;
  transform: rotate(45deg);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  flex-grow: 1;
`;

interface ToggleButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
}

export const ToggleButton = ({ children, onClick, primary }: ToggleButtonProps) => {
  return (
    <div data-testid={'ToggleButtonTest'}>
      <Button onClick={onClick}>
        {
          <Wrapper>
            <Icon primary={primary}>
              <Check />
            </Icon>
            <Text>{children}</Text>
          </Wrapper>
        }
      </Button>
    </div>
  );
};
