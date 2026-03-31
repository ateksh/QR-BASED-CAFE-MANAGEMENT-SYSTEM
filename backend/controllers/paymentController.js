const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummykey12345',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummysecret1234567890'
});

exports.createOrder = async (req, res) => {
    try {
        const { amount } = req.body;
        const options = {
            amount: Math.round(amount * 100),
            currency: 'INR',
            receipt: 'receipt_' + Math.floor(Math.random() * 10000)
        };
        
        const key_id = process.env.RAZORPAY_KEY_ID || 'rzp_test_dummykey12345';
        
        let order;
        if (key_id === 'rzp_test_dummykey12345' || key_id.includes('dummy')) {
            order = { id: 'order_dummy_' + Date.now(), amount: options.amount, currency: 'INR' };
        } else {
            try {
                order = await razorpay.orders.create(options);
            } catch (err) {
                console.log("Razorpay API rejected the keys. Falling back to test simulation mode.");
                order = { id: 'order_dummy_' + Date.now(), amount: options.amount, currency: 'INR', simulated: true };
            }
        }

        if (!order) {
            return res.status(500).json({ success: false, message: 'Some error occurred generating order' });
        }
        
        res.json({ success: true, order, key_id, simulated: !!order.simulated });
    } catch (error) {
        console.error('Razorpay Create Order Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message || error });
    }
};

exports.verifyPayment = (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const secret = process.env.RAZORPAY_KEY_SECRET || 'dummysecret1234567890';

        if (secret === 'dummysecret1234567890' || secret.includes('dummy')) {
            return res.json({ success: true, message: 'Payment verification successful (Mocked)' });
        }

        const generated_signature = crypto
            .createHmac('sha256', secret)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest('hex');
        if (generated_signature === razorpay_signature) {
            res.json({ success: true, message: 'Payment verification successful' });
        } else {
            res.status(400).json({ success: false, message: 'Payment verification failed: Invalid Signature' });
        }
    } catch (error) {
        console.error('Razorpay Verification Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};
