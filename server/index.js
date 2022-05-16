const app = require('./app')

const init = () => {
  try{
    const port = 1994
    app.listen(port,() => console.log(`listening on port ${port}`))


  }catch(ex){
    console.log(ex)
  }
}

init()