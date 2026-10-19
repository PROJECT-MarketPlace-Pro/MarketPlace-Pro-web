import React from 'react';
import CheckoutSteps from './CheckoutSteps';

function PaymentScreen() {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Payment processing... ");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>
            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethodPaypal"
                  value="paypal"
                  defaultChecked
                />
                <label htmlFor="paymentMethodPaypal">Paypal</label>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethodBitcoin"
                  value="bitcoin"
                />
                <label htmlFor="paymentMethodBitcoin">Bitcoin</label>
              </div>
            </li>
            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default PaymentScreen;