import React, { useRef, useState } from 'react';
import io from 'socket.io-client';


import Container from './components/container/container';

class App extends React.Component {
  componentDidMount() {
    //windowlocation = object with origin = domain without path. estabilishes socket 
   
    // const connection = io(window.location.origin)
    // connection.on('connect',() =>{
    //   console.log('connected to server')
    // })
  }
  render() {
    return (
      <Container/>
    )
  
  }
}


export default App