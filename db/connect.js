const mongoose = require('mongoose');


const connectDB =(url) =>{
   return mongoose.connect('mongodb://localhost:27017/03-TASK-MANAGER',{
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify: true,
 })
}

module.exports =connectDB


//mongodb+srv://Rex123:rex123@preciouscluster.960sm.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority