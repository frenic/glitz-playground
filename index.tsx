import * as React from 'react';
import { render } from 'react-dom';
import { GlitzClient } from '@glitz/core';
import transformers from '@glitz/transformers';
import { GlitzProvider, styled } from '@glitz/react';
import App from './App';

let glitz = new GlitzClient({ transformer: transformers() });

if ((module as any).hot) {
  if ((module as any).hot.data && (module as any).hot.data.glitz) {
    glitz = (module as any).hot.data.glitz;
  }

  (module as any).hot.dispose((data: any) => {
    data.glitz = glitz;
  });
}

render(
  <GlitzProvider glitz={glitz}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontSize: 24,
      }}
    >
      <App />
    </div>
  </GlitzProvider>,
  document.getElementById('container'),
);
