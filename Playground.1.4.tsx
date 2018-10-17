import * as React from 'react';
import { styled } from '@glitz/react';

const Text = styled.span({
  animationName: {
    from: {
      opacity: 0,
    },
    '50%': {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  animationDuration: 1000,
  animationIterationCount: 10,
});

const Playground = () => <Text>Hello world!</Text>;

export default Playground;
