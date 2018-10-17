import * as React from 'react';
import { styled } from '@glitz/react';

const capsStyled = styled({
  textTransform: 'uppercase',
});

const fontStyled = styled({
  fontWeight: 'bold',
});

const Playground = capsStyled(fontStyled(props => <styled.Span css={props.compose()}>Hello world!</styled.Span>));

export default Playground;

export const title = 'Create new `styled()` function with embedded style';
