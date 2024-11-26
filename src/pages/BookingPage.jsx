// src/pages/BookingPage.jsx

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const BookingPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [bookingDetails, setBookingDetails] = useState({
    carId: '',
    pickupLocation: '',
    dropoffLocation: '',
  });
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    // Create a payment intent on the server
    const response = await axios.post('/api/create-payment-intent', {
      amount: 5000, // Amount in cents
      currency: 'usd',
    });

    const clientSecret = response.data.clientSecret;

    // Confirm the payment on the client
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: bookingDetails.userName,
          email: bookingDetails.userEmail,
        },
      },
    });

    if (result.error) {
      setPaymentStatus(`Payment failed: ${result.error.message}`);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setPaymentStatus('Payment succeeded!');
        // Handle successful payment (e.g., update booking status)
      }
    }
  };

  return (
    <div>
      <h2>Book a Car</h2>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for booking details */}
        <input
          type="text"
          placeholder="Car ID"
          value={bookingDetails.carId}
          onChange={(e) => setBookingDetails({ ...bookingDetails, carId: e.target.value })}
          required
        />
        {/* Add more input fields as needed */}
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      <p>{paymentStatus}</p>
    </div>
  );
};

export default BookingPage;
