const Order = require('../models/Order');
const pricingCatalog = require('../config/pricing');

exports.createOrder = async (req, res) => {
    try {
        const { customerName, items, orderType, tableNum, paymentMethod } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: 'No order items provided' });
        }

        // Dynamically calculate price based on ID dictionary to prevent API spoofing
        let accurateTotal = 0;
        const validItems = [];

        items.forEach(cartItem => {
            const catalogProduct = pricingCatalog[cartItem.id];
            if (catalogProduct) {
                accurateTotal += catalogProduct.price * cartItem.quantity;
                validItems.push({
                    name: catalogProduct.name,
                    price: catalogProduct.price,
                    quantity: cartItem.quantity
                });
            }
        });

        if (validItems.length === 0) {
            return res.status(400).json({ message: 'Menu items are invalid or unavailable.' });
        }

        const newOrder = new Order({
            customerName: customerName || 'Guest',
            items: validItems,
            totalAmount: accurateTotal,
            orderType,
            tableNum,
            paymentMethod
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {

        const orders = await Order.find({}).sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderStatus } = req.body;
        const orderId = req.params.id;

        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { orderStatus },
            { returnDocument: 'after' }
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status', error: error.message });
    }
};

exports.deleteAllOrders = async (req, res) => {
    try {
        await Order.deleteMany({});
        res.status(200).json({ message: 'All orders cleared' });
    } catch (error) {
        res.status(500).json({ message: 'Error clearing orders', error: error.message });
    }
};
