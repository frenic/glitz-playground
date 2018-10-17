import * as React from 'react';
import { styled } from '@glitz/react';

const First = styled.div({
  borderLeftColor: 'thistle',
});

const Text = styled.span({
  // @ts-ignore
  border: 'coral solid thick',
  borderLeftColor: 'thistle',
});

const Playground = () => (
  <>
    <First />
    <Text>Hello world!</Text>
  </>
);

export default Playground;

export const title = 'Mixing shorthand and longform problem';
