import * as React from 'react';
import { styled } from '@glitz/react';

const Hello = styled(props => <styled.Span css={props.compose({ color: 'coral' })}>Hello world!</styled.Span>);

const Playground = styled(Hello, {
  color: 'thistle',
});

export default Playground;

export const title = 'Compose style objects using `styled()`';
