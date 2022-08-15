import { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 1900px;
  background: #efefef;
  padding: 30px;
`;

export class Wrapper extends Component<any, any> {
  render() {
    return <Content>wrapper</Content>;
  }
}
