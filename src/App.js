import React, { Component } from 'react';

import Button from './Button';
import Buttons from './Buttons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 }
    this.addHandler = this.addHandler.bind(this);
  }
  addHandler() {
    this.setState({total: this.state.total + 1})
  }
  render() {
    const { total } = this.state;
    return (
      <div>
        <h2>Reactive Demo</h2>
        <hr />
        <p>Total: { total }</p>
        <Button action={this.addHandler}>Add</Button>
        <Button>Subtract</Button>
        <p>New total: {this.props.store.counter.value}</p>
        <Buttons />
      </div>
    );
  }
}

export default App;
