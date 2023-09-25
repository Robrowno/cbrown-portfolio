const mongoose = require('mongoose');

const rallyResultSchema = new mongoose.Schema({
    rallyName: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    car: {
        type: String,
        required: true,
        trim: true
    },
    driver: {
        type: String,
        required: true,
        trim: true
    },
    team: {
        type: String,
        trim: true,
        default: null
    },
    championshipResult: {
        type: Number,
        required: false
    },
    classResult: {
        type: Number,
        required: true
    },
    overallResult: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        trim: true,
        default: null
    }
});

const RallyResult = mongoose.models.RallyResult || mongoose.model('RallyResult', rallyResultSchema);

module.exports = RallyResult;
