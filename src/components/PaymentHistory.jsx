// src/components/PaymentHistory.jsx

import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      if (user) {
        const response = await axios.get(`/api/payments?userId=${user.uid}`);
        setPayments(response.data);
      }
    };
    fetchPayments();
  }, [user]);

  return (
    <div>
      <h2>Payment History</h2>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            Amount: ${(payment.amount / 100).toFixed(2)} - Status: {payment.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;
