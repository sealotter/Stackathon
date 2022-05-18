import React, { useRef, useState } from 'react';
import socket from 'socket.io-client';


import Container from './components/container/container';

class App extends React.Component {
  componentDidMount() {
   
    const connection = socket(window.location.origin)
    connection.on('connect',() =>{
      console.log('connected to server')
    })
  }
  render() {
    return (
      <Container/>
    )
  
  }
}


export default App