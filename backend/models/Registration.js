const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNumber: { type: String, required: true },
    branch: { type: String, required: true, enum: ['CSE', 'IT', 'ECE', 'EEE', 'MECH'] },
    year: { type: String, required: true, enum: ['1st', '2nd', '3rd', '4th'] },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);
