const express = require('express');
const app = express();
const morgan = require('morgan');
const tasks = require('./routes/tasks')
const connectDB =require('./db/connect')
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler')


//middleware setup
app.use(morgan('tiny'))

//Middleware json setup
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks',tasks);

app.use(notFound)
app.use(errorHandlerMiddleware)

//app.get('/api/v1/tasks) -get all the tasks
//app.post('/api/v1/tasks) -create a new tasks
//app.get('/api/v1/tasks/:id) -get a single task
//app.patch('/api/v1/tasks/:id) -update  task
//app.delete('/api/v1/tasks/id) -delete task


// SERVER SETUP  //////////////////////////////////
const port = process.env.PORT || 5000;

const start =async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('CONNECTED TO THE DB...')
        app.listen(port, () =>console.log(`Server is listening  at ${port}....`));
    }catch(err){
        console.log(err);
    }
}

start()


