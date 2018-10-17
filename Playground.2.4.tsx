import * as React from 'react';
import { styled } from '@glitz/react';

const Hello = styled(props => (
  <styled.Span
    css={props.compose({
      ':hover': {
        textDecoration: 'underline',
      },
    })}
  >
    Hello world!
  </styled.Span>
));

const Playground = styled(Hello, {
  ':hover': {
    fontWeight: 'bold',
  },
});

export default Playground;
