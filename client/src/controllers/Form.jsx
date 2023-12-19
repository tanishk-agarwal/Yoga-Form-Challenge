// Form.jsx
import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../styles/form.css';

function Form({ onPaymentSuccess }) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [batch, setBatch] = useState('');
  const [message, setMessage] = useState('');
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePayment = async () => {
    try {
      await axios.post('http://localhost:4000/api/payment', {
        name,
        dob,
        email,
        batch,
      });
      onPaymentSuccess();
      setMessage('Payment successful.');
      setPaymentSuccessful(true);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // You can perform additional form validation here if needed

      // Submit the form
      const response = await axios.post('http://localhost:4000/api/submit-form', {
        name,
        dob,
        email,
        batch,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="form-container">
      <h2>Yoga Class Admission Form</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Batch:
          <select value={batch} onChange={(e) => setBatch(e.target.value)}>
            <option value="6-7AM">Batch-1: 6-7 AM</option>
            <option value="7-8AM">Batch-2: 7-8 AM</option>
            <option value="8-9AM">Batch-3: 8-9 AM</option>
            <option value="5-6PM">Batch-4: 5-6 PM</option>
          </select>
        </label>
        <br />
        {!paymentSuccessful && (
          <button type="button" onClick={handlePayment} className="payment-button">
            Make Payment
          </button>
        )}
        {paymentSuccessful && <p>{message}</p>}
        <button type="submit" onClick={handleSubmit} className="submit-button">
          Submit Form
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}

Form.propTypes = {
  onPaymentSuccess: PropTypes.func.isRequired,
};

export default Form;
