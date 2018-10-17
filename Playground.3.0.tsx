import * as React from 'react';
import { styled, ThemeProvider } from '@glitz/react';
import { Theme } from '@glitz/type';

const Text = styled.span({
  color: theme => theme.textColor,
});

const Playground = () => (
  <ThemeProvider theme={theme1}>
    <Text>Hello</Text>
    <ThemeProvider theme={theme2}>
      <Text>world!</Text>
    </ThemeProvider>
  </ThemeProvider>
);

export default Playground;

const theme1: Theme = {
  textColor: 'thistle',
};

const theme2: Theme = {
  textColor: 'coral',
};
