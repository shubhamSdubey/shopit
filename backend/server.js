const app = require('./app')


app.listen(process.env.port, () => 
  console.log(`Server started on port: ${process.env.port} in ${process.env.NODE_ENV} mode.`)
)