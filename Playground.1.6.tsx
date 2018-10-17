import * as React from 'react';
import { styled } from '@glitz/react';

const Text = styled.span({
  border: {
    xy: {
      style: 'solid',
      width: 'thick',
    },
    x: {
      color: 'thistle',
    },
    y: {
      color: 'coral',
    },
  },
});

const Playground = () => <Text>Hello world!</Text>;

export default Playground;

export const title = 'Shorthand extensions and aliases';
