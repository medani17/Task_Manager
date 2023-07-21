const moongoose = require('mongoose')

// const connectionString =
// 'mongodb+srv://medani:Riya1234@nodeexpressproject.xd04xwc.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'


const connectDB = (url) => {
return moongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
}

module.exports = connectDB



    // .then( () => console.log('Connected to the DB...'))
    // .catch((err) => console.log(err) )