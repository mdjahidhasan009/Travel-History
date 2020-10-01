const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

//Get all log entry
router.get('/', async(req, res, next) => {
    try {
        const entries = await LogEntry.find();
        res.json(entries);
    } catch (error) {
        next(error);
    }
});

//Create new log entry
router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const logEntry = new LogEntry(req.body);
        const createdEntry = await logEntry.save();
        res.json(createdEntry);
    } catch (error) {
        if(error.name === 'ValidationError') res.status(422);
        next(error);
    }
})

module.exports = router;
