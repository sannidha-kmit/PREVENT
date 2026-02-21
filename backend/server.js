const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Registration = require('./models/Registration');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pr_portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.post('/api/register', async (req, res) => {
    try {
        const { name, rollNumber, branch, year, email, phone } = req.body;

        // Basic validation
        if (!name || !rollNumber || !branch || !year || !email || !phone) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newRegistration = new Registration({
            name, rollNumber, branch, year, email, phone
        });

        await newRegistration.save();
        res.status(201).json({ message: 'Registration Successful 🎉' });
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
});

app.get('/api/registrations', async (req, res) => {
    try {
        const registrations = await Registration.find().sort({ createdAt: -1 });
        res.json(registrations);
    } catch (error) {
        console.error('Fetch Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
