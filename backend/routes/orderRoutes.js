const express = require('express');
const router = express.Router();
const {
    createOrder,
    getOrders,
    updateOrderStatus,
    deleteAllOrders
} = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

router.route('/')
    .post(createOrder)
    .get(authMiddleware, getOrders)
    .delete(authMiddleware, deleteAllOrders);
    
router.route('/:id').put(authMiddleware, updateOrderStatus);

module.exports = router;
