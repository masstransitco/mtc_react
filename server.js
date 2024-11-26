// server.js

const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const stripe = Stripe('YOUR_STRIPE_SECRET_KEY');

app.use(cors());
app.use(express.json());

app.post('/api/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));


// server.js (add the following route)

app.get('/api/payments', async (req, res) => {
    const { userId } = req.query;
    // Fetch payments from your database where userId matches
    // Example:
    const payments = await PaymentModel.find({ userId });
    res.send(payments);
  });
  