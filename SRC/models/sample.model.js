const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// creating a reminder schema 
const sampleSchema = new Schema({
    firstName: {
        "type": String,
        required: [true, "pls input first name"]
    },
    lastName: {
        "type": String,
        required: [true, "pls input last name"]
    },
    bloodGroup: {
        "type": String,
        required: [true, "pls input blood group"]
    },
    rheususFactor: {
        "type": String,
        required: [true, "pls input rheusus factor"]
    },
    genotype: {
        "type": String,
        required: [true, "pls input first genotype"]
    },
    donatedBloodBefore: {
        "type": Boolean,
        required: [true, "pls state if you have donated blood before"]
    },
    email: {
        "type": String,
        required: [true, "pls input first email"]
    },
    date: {
        "type": Date,
        default: Date.now(),
        immutable: true
    },
},
{ timestamps: true });
// creating a sample model for the schema
const sampleModel = mongoose.model("sample", sampleSchema);
// exporting the sample model to be used in other files when required
module.exports = sampleModel;