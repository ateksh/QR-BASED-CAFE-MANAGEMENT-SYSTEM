const mongoose = require('mongoose');
const Admin = require('./models/Admin');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/cafe-mangement';

mongoose.connect(MONGO_URI)
    .then(async () => {
        const exists = await Admin.findOne({ username: 'admin' });
        if (!exists) {
            const admin = new Admin({ username: 'admin', password: 'password123' });
            await admin.save();
            console.log('Admin user created successfully.');
            console.log('Username: admin');
            console.log('Password: password123');
        } else {
            console.log('Admin user already exists. You can log in with your existing credentials.');
        }
        process.exit(0);
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
        process.exit(1);
    });
