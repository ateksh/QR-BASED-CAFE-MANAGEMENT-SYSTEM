require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const orderRoutes = require('./routes/orderRoutes');
const connectDB = require('./config/db');

connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*' }
});

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/payment', paymentRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname)));

let allOrders = [];

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('newOrder', (orderData) => {

        io.emit('orderAdded', orderData);
        console.log('New order received and broadcasted', orderData._id || orderData.id);
    });

    socket.on('updateOrderStatus', ({ id, newStatus }) => {

        io.emit('orderStatusChanged', { id, newStatus });
        console.log(`Order ${id} broadcast status updated to ${newStatus}`);
    });

    socket.on('clearAllOrders', () => {
        io.emit('ordersCleared');
        console.log('All orders cleared broadcast by admin');
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`Open multiple tabs to test Kitchen, Admin, and User screens.`);
    });
}

// Export for Vercel Serverless
module.exports = app;
