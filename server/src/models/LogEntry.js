const mongoose = require('mongoose');
const { Schema } = mongoose;

const requireString = {
    type: String,
    required: true
}

const requireNumber = {
    type: Number,
    required: true
}

const logEntrySchema = new Schema({
    title: requireString,
    description: String,
    comments: String,
    image: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    longitude: {
        ...requireNumber,
        min: -180,
        max: 180
    },
    latitude: {
        ...requireNumber,
        min: -90,
        max: 90
    },
    visitDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);
module.exports = LogEntry;
