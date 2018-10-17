import * as React from 'react';
import { styled } from '@glitz/react';
import { media, query } from '@glitz/core';

const Text = styled.span({
  color: 'thistle',
  ...media(query({ minWidth: '480px' }), {
    color: 'coral',
  }),
});

const Playground = () => <Text>Hello world!</Text>;

export default Playground;
