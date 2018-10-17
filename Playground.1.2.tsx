import * as React from 'react';
import { styled } from '@glitz/react';
import { pseudo } from '@glitz/core';

const Text = styled.span({
  color: 'thistle',
  ':hover': {
    color: 'coral',
  },
  ...pseudo(':not(:root)', {
    fontWeight: 'bold',
  }),
});

const Playground = () => <Text>Hello world!</Text>;

export default Playground;

export const title = 'Pseudo and advanced pseudo using `pseudo()` helper';
