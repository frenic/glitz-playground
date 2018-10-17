import * as React from 'react';
import { styled } from '@glitz/react';

const Text = styled.span({
  color: ['thistle', '#0000ffaa'],
});

const Playground = () => <Text>Hello world!</Text>;

export default Playground;

export const title = 'Fallback value';
