import React, { useRef, useState } from 'react';

import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import Container from './components/container/container';



const App = () => {
  return (
    <Container/>
  )
  //for manipulating dom elements
  // const canvasRef = useRef(null)
  // //inner drawing reference (inner rendering context)
  // const ctx = useRef(null)

  // const [selectedColor, setSelectedColor] = useState(colors[0])

  // const draw = (x, y) => {
  //   if(onMouseDown) {

  //   }
  // }

  // //when component first mounts
  
  
  //   // const canvas = document.getElementById('canvas');
  //   // const ctx = canvas.getContext('2d');
  //   // ctx.fillStyle = 'green';
  //   // ctx.fillRect(10, 10, 150, 100);

  // return ( 
  //   <div className='App'>
  //     <canvas id='canvas' 
  //       style={{border: '1px solid black'}} 
  //       width = {400} height = {400} 
  //       ref= {canvasRef} 
  //       // onMouseMove = {onMouseMove}
  //       // onMouseUp = {onMouseUp}
  //       // onMouseDown = {onMouseDown}
  //       // onMouseLeave = {onMouseLeave}
      
  //     />

      



  //     <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
  //       {colors.map(color => <option key = {color} value={color}>{color}</option>)}
  //     </select>
  //     <button>Clear</button>
  //     <button>Download</button>
      
  //   </div>
    
}

export default App