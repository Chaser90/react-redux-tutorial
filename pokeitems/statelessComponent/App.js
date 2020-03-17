import React , { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
      { name:'Ryu', age:'32', belt:'black', id: 1 },
      { name:'Hyun', age:'25', belt:'yellow', id: 2 },
      { name:'yeon', age:'27', belt:'silver', id: 3 }
    ]
  }
  render() {
  return (
    <div className="App">
      <h1> My Second React app!</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas={this.state.ninjas } />
    </div>
    );
  }
}

export default App;
