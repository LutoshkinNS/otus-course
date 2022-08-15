import { Component, ReactNode } from 'react';
import { Wrapper } from '../Grid';

interface Props {
  children: ReactNode;
}

class Graph extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export default Graph;
