import * as React from 'react';
import { styled } from '@glitz/react';

const Playground = styled({ color: 'thistle' })(props => <styled.Span css={props.compose()}>Hello world!</styled.Span>);

export default Playground;

export const title = 'Decorate style objects using `styled()`';
