import React, { useState } from 'react';
import './payment.css';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Payment submitted:', paymentData);
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={paymentData.cardNumber}
              onChange={handleChange}
              maxLength="19"
            />
          </div>
          
          <div className="form-group">
            <label>Card Holder Name</label>
            <input
              type="text"
              name="cardHolder"
              placeholder="John Doe"
              value={paymentData.cardHolder}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group half">
              <label>Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={paymentData.expiryDate}
                onChange={handleChange}
                maxLength="5"
              />
            </div>
            
            <div className="form-group half">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                placeholder="123"
                value={paymentData.cvv}
                onChange={handleChange}
                maxLength="3"
              />
            </div>
          </div>
          
          <button type="submit" className="submit-button">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;