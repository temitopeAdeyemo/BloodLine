const sample = require('../models/sample.model');

exports.newSample = async (req,res,next)=>{
    try {
        const { 
            firstName, lastName,
            bloodGroup, rheususFactor, genotype,
             email, donatedBloodBefore,
             date} = req.body;

        const addSample = new sample ({
            firstName,
            lastName,
            bloodGroup, rheususFactor, genotype,
             email,
             donatedBloodBefore,
             date })
        await addSample.save();
        
        return res.status(201).json({
            success: true,
            addSample
        })
    
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: 'An error occured'
        })
    }
}



exports.findSamples = async (req,res,next) =>{
    try {
        allSamples = await sample.find();
        
        return res.status(201).json({
            success: true,
            allSamples
        })
    } catch (error) {
        // console.log(error.message)
        return res.status(500).json({
            success: false,
            message: 'error caught'
        })
    }
}



exports.updateBloodSample = async (req,res,next)=>{
    try {
        const { _id } = req.params;
        const updatedSample = await sample.findOneAndUpdate({ _id }, req.body, {new: true})
        return res.status(201).json({
            success: true,
            updatedSample
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: 'Error occurred'
        })
    }
}



exports.deleteSample = async (req,res,next)=>{
    try {
    const { _id } = req.params;
    const deleteBloodSample = await sample.findOneAndDelete({_id})
    return res.status(201).json({
        success: true,
        message: `Data with ${_id} has been deleted`
    })
} catch (error) {
    console.log(error)
    return res.status(500).json({
        success: false,
        message: 'An Error Occurred'
    })
}
}

