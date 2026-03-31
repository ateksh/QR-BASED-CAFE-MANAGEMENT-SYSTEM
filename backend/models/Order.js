const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
    customerName: { 
        type: String, 
        required: true,
        default: 'Guest' 
    },
    items: [orderItemSchema],
    totalAmount: { 
        type: Number, 
        required: true 
    },
    orderType: { type: String },
    tableNum: { type: String },
    paymentMethod: { type: String },
    orderStatus: { 
        type: String, 
        enum: ['Pending', 'Preparing', 'Completed', 'Cancelled', 'pending', 'preparing', 'completed', 'cancelled'], 
        default: 'Pending' 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
