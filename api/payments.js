// api/payments.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { userId } = req.query;
  if (req.method === 'GET') {
    try {
      // Retrieve payments from your database associated with userId
      const payments = await getPaymentsForUser(userId); // Implement this function
      res.status(200).send(payments);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}
