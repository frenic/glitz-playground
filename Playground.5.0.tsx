import * as React from 'react';
import { styled, applyClassName } from '@glitz/react';

class ThirdPart extends React.Component<{ className?: string }> {
  public render() {
    return <span className={this.props.className}>Hello world!</span>;
  }
}

const Playground = styled(applyClassName(ThirdPart), {
  color: 'thistle',
});

export default Playground;

export const title = 'Use `applyClassName` with "third party" components';
