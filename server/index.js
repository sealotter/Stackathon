const app = require('./app')
const port = process.env.PORT || 1994 
app.listen(port,() => console.log(`listening on port ${port}`))

const init = () => {
  try{
    
  }catch(ex){
    console.log(ex)
  }
}

init()