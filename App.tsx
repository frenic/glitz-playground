import * as React from 'react';
import Register, { playgrounds } from './Register';

type State = {
  playground: React.ComponentType;
};

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    const hash = window.location.hash.substr(1);

    this.state = {
      playground: hash && hash in playgrounds ? playgrounds[hash].default : Register,
    };

    window.addEventListener('hashchange', e => {
      const newHash = window.location.hash.substr(1);
      const playground = newHash && newHash in playgrounds ? playgrounds[newHash].default : Register;

      if (playground !== this.state.playground) {
        this.setState({ playground });
      }
    });
  }
  public render() {
    return <this.state.playground />;
  }
}
