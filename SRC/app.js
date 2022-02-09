const express = require("express");
const mongoose = require("mongoose");
const app = express();
const env = require("dotenv");
env.config();

const PORT = process.env.PORT;

app.use(express.json())

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

app.use('/api/v1',sampleRoute)

app.listen(PORT, ()=>{
console.log(`App is now listening to port ${PORT}`);
})

