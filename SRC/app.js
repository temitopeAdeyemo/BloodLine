const express = require("express");
const mongoose = require("mongoose");
const app = express();
const env = require("dotenv");
env.config();

const PORT = process.env.PORT;
// calling express.json since we will be posting and getting datas in json formats
app.use(express.json())
// An async function to call to connect to the database
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.DATA_URI)
                console.log(`Database connected`)
    } catch (error) {
        console.log(`Database is not connected`)
    }
}
connectDB()

const sampleRoute = require('./router/sample.route')
// creating a router path for app
app.use('/api/v1',sampleRoute)
app.listen(PORT, ()=>{
console.log(`App is now listening to port ${PORT}`);
})