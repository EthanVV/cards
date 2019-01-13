import React from 'react';
import ReactDOM from 'react-dom';

import DevNav from './components/dev-nav.jsx';
import Card from './components/card/index.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <DevNav />
        <Card />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));