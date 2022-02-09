const sample = require('../controllers/sample.controller');
const express = require("express");

const sampleRoute = express.Router();

sampleRoute.post("/add-sample", sample.newSample);


sampleRoute.get("/find-samples", sample.findSamples);


sampleRoute.patch("/update-sample/:_id", sample.updateBloodSample);


sampleRoute.delete("/delete-sample/:_id", sample.deleteSample);

module.exports = sampleRoute;
