import * as React from 'react';
import { styled } from '@glitz/react';

const Text = styled.span({
  color: 'thistle',
});

const Playground = () => <Text>Hello world!</Text>;

export default Playground;

export const title = 'Create styled component with `styled.span()`';
