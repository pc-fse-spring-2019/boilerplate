import React, { Component } from 'react';
import '../styles/base.css'
import axios from 'axios'

axios.get('http://localhost:3001/example').then(resp => {
  console.log(resp.data)
})

class App extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

export default App;
