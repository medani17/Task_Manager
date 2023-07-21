const express = require('express')
const app = express()
const tasks =  require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHAndlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())

//Routes
// app.get('/hello' , (req,res) => {
//     res.send('Task Manager App')
// })

app.use('/api/v1/tasks' , tasks)
app.use(notFound)
app.use(errorHAndlerMiddleware)

//app.get('/api/v1/tasks')   -get all the tasks
//app.post('/api/v1/tasks')  - create a new task
//app.get('/api/v1/tasks/:id) - get single task
//app.patch('/api/v1/tasks/:id) - update task
//app.delete('/api/v1/tasks/:id) - delete task


const port = process.env.PORT || 3000

const start= async () => {
    try {
       await connectDB(process.env.MONGO_URI)
       app.listen(port, console.log(`server to Listening port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()
