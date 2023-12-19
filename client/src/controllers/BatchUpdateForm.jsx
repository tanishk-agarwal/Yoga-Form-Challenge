// BatchUpdateForm.jsx

import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../styles/batchUpdate.css';


function BatchUpdateForm({ onBatchUpdate }) {
  const [email, setEmail] = useState('');
  const [newBatch, setNewBatch] = useState('');
  const [message, setMessage] = useState('');

  const handleBatchUpdate = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/update-batch', {
        email,
        newBatch,
      });

      setMessage(response.data.message);
      onBatchUpdate();
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="batch-update-form">
      <h2>Update Batch Choice</h2>
      <form>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          New Batch:
          <select value={newBatch} onChange={(e) => setNewBatch(e.target.value)}>
            <option value="6-7AM">Batch-1: 6-7 AM</option>
            <option value="7-8AM">Batch-2: 7-8 AM</option>
            <option value="8-9AM">Batch-3: 8-9 AM</option>
            <option value="5-6PM">Batch-4: 5-6 PM</option>
          </select>
        </label>
        <br />
        <button className='update-button' type="button" onClick={handleBatchUpdate}>
          Update Batch
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}

BatchUpdateForm.propTypes = {
  onBatchUpdate: PropTypes.func.isRequired,
};

export default BatchUpdateForm;
