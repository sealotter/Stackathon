
import React, {useState, useRef} from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

// import './style.css'
//challenges: 1)one big componentdidupdate cycle  that also needs to capture the memoized data of the functions from the mouse movements?(usecallback) need the exact data of your mouse(drawing) and the other users mouse(sockets)
//2) knowing taht as a single user drawing its essentially one big componentupdate for the drawing itself but then how that extends to sockets and weird to wrap my head around eg. state vs. add event listeners for mousemovements === like lisa said sockets being 1 big event listener
//interesting to think of how to place state on the mouse. whether to use the state or directly assign boolean value each time & transitioning that from single user to multiple (q: would that be affected)
//similar to lisa had with the api for grace shopper, there was a rate limit, so had to consider a throttle so wont overload the connect, creating a time delay to space it out 

// const colors = [
//   'red',
//   'black',
//   'yellow',
//   'blue',
//   'green'
// ]
const CanvasBoard = (props) => {
  const canvasRef = useRef(null)
  const ctx = useRef(null)
  const [mouseDown, setMouseDown] = useState(false)
  const [last_position, set_position] = useState({
    x: 0,
    y: 0
  })
  const colors = useRef(null)
  

  useEffect(() =>  {
    //var canvasRef = document.querySelector('#canvas-board')

    if(canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d')
    }
  
    //rather than use state change value each time for mouse positions
    //let isDrawing = false

    //mouse movements 
    // canvas.addEventListener('mousedown', function(evt) {
    //   canvas.addEventListener('mousemove', draw(), false)
    // },false)
    // canvas.addEventListener('mouseup', function(evt) {
    //   canvas.removeEventListener('mousemove', draw(), false)
    // }, false)
   

  },[])

  const drawOnCanvas = useCallback((x,y) => {
    if(mouseDown) {
      ctx.current.beginPath()
      ctx.current.moveTo(last_position.x, last_position.y)
      ctx.current.lineTo(x,y)
      ctx.current.closePath()
      ctx.current.stroke() 
      ctx.current.lineWidth = 2
      //ctx.current.strokeStyle= currColor.color
      //ctx.strokeStyle = currColor.color
      set_position({x,y})
    }
    
  }, [last_position, mouseDown, set_position])

  const onMouseDown = (evt) => {
    set_position({
      x: evt.pageX,
      y: evt.pageY
    })
    setMouseDown(true)

  }

  const onMouseUp = (evt) => {
    setMouseDown(false)
  }

  const onMouseMove = (evt) => {
    drawOnCanvas(evt.pageX,evt.pageY)
  }



  

 
  
    return (
      <div>
        <canvas ref = {canvasRef} width = {400} height = {400} onMouseDown = {onMouseDown} onMouseUp = {onMouseUp} onMouseMove = {onMouseMove} className='canvas-board' id='canvas-board'>

        </canvas>
        <br/>
        {/* <select value={chosenColor} onChange={(evt) => setColor(evt.target.value)}> {colors.map(color => <option key = {color} value = {color}>{color}</option>)}</select> */}

     </div>
    )

}





export default CanvasBoard