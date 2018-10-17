import * as React from 'react';
import { styled, StyledProps } from '@glitz/react';

type PropType = {
  success?: boolean;
};

const Playground = (props: PropType) => (
  <styled.Span css={{ color: props.success ? 'thistle' : 'coral' }}>Hello world!</styled.Span>
);

export default Playground;

export const title = 'Dynamic style using props';
