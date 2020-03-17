import React , { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name:'Ryu', age:'32', belt:'black', id: 1 },
      { name:'Hyun', age:'25', belt:'yellow', id: 2 },
      { name:'yeon', age:'27', belt:'silver', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
  return (
    <div className="App">
      <h1> My Second React app!</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas={this.state.ninjas } />
      <AddNinja addNinja={this.addNinja}/>
    </div>
    )
  }
}

export default App;
