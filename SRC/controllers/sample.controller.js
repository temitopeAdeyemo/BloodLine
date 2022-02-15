const sample = require('../models/sample.model');
// creating a new reminder async function taking req, res and next as callbacks to create a new reminder
exports.newSample = async (req,res,next)=>{
    try {
        const { 
            firstName, lastName,
            bloodGroup, rheususFactor, genotype,
             email, donatedBloodBefore,
             date} = req.body;
             if( !firstName || !lastName ||
                !bloodGroup || !rheususFactor || !genotype ||
                 !email || !donatedBloodBefore){
                     return res.status(400).json({
                        success: false,
                        message: 'Please fill all required field'
                    })
                 }
// creating an instance of the created model on the model file
        const addSample = new sample ({
            firstName,
            lastName,
            bloodGroup, rheususFactor, genotype,
             email,
             donatedBloodBefore,
             date })
// using the save method to save the created sample in the database
        await addSample.save();
        return res.status(201).json({
            success: true,
            addSample
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
// creating an async function (taking req, res and next as callbacks) to find all samples.
exports.findSamples = async (req,res,next) =>{
    try {
        allSamples = await sample.find();
        return res.status(200).json({
            success: true,
            allSamples
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
// creating an async function (taking req, res and next as callbacks) to update a sample.
exports.updateBloodSample = async (req,res,next)=>{
    try {
        const { _id } = req.query;
        const updatedSample = await sample.findOneAndUpdate({ _id }, req.body, {new: true})
        return res.status(200).json({
            success: true,
            updatedSample
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
// creating an async function (taking req, res and next as callbacks) to delete a sample.
exports.deleteSample = async (req,res,next)=>{
    try {
    const { _id } = req.query;
    const deleteBloodSample = await sample.findOneAndDelete({_id})
    return res.status(200).json({
        success: true,
        message: `Data with ${_id} has been deleted`
    })
} catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message
    })
}
}