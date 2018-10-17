import * as React from 'react';
import { styled, StyledProps } from '@glitz/react';
import { Style } from '@glitz/type';
import memoize from 'memoize-one';

type PropType = {
  success?: boolean;
};

const Playground = (props: PropType) => <styled.Span css={successStyle(props.success)}>Hello world!</styled.Span>;

const successStyle = memoize(
  (success?: boolean): Style => ({
    color: success ? 'thistle' : 'coral',
  }),
);

export default Playground;

export const title = 'Enhance performance using memoization';
