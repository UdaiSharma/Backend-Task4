const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/my-app?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"


const connectToMongo=async ()=>{
await mongoose.connect(mongoURI,()=>{
    console.log('Server connected to mongodb');
})
}

module.exports = connectToMongo;