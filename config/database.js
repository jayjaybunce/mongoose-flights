const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/flights',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;


db.on('connected',function(){
    console.log(`Connected to MongoDB:${db.name} on ${db.host}:${db.port}`)
})