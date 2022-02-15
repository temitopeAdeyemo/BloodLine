const sample = require('../controllers/sample.controller');
const express = require("express");
// calling the express router method to use router
const sampleRoute = express.Router();
sampleRoute.post("/add-sample", sample.newSample);
sampleRoute.get("/find-samples", sample.findSamples);
sampleRoute.patch("/update-sample", sample.updateBloodSample);
sampleRoute.delete("/delete-sample", sample.deleteSample);
// exporting all routes
module.exports = sampleRoute;
