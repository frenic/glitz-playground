import * as React from 'react';
// @ts-ignore
import { default as playgrounds } from './Playground.*.tsx';

export { playgrounds };

console.log(Object.keys(playgrounds), playgrounds);

export default class Register extends React.Component {
  public render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 14 }}>
        {Object.keys(playgrounds).map(key => (
          <a
            key={key}
            href={`#${key}`}
            style={{ display: 'block', padding: 10, margin: 5, border: 'solid thistle thin', color: 'inherit' }}
          >
            <strong>{key}</strong> {playgrounds[key].title}
          </a>
        ))}
      </div>
    );
  }
}
