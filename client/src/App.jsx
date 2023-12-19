// App.jsx
import { useState } from 'react';
import Header from './controllers/Header';
import Instructions from './controllers/Instructions';
import Form from './controllers/Form';
import BatchUpdateForm from './controllers/BatchUpdateForm';
import './App.css';

function App() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showBatchUpdateForm, setShowBatchUpdateForm] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  const handleBatchUpdate = () => {
    setShowBatchUpdateForm(true);
  };

  const handleBatchUpdateFormClose = () => {
    setShowBatchUpdateForm(false);
  };

  return (
    <div>
      <Header onBatchUpdateClick={handleBatchUpdate} />

      <div className="body-container">
        <Instructions />

        {!paymentSuccess && !showBatchUpdateForm && (
          <Form onPaymentSuccess={handlePaymentSuccess} />
        )}
        {paymentSuccess && !showBatchUpdateForm && (
          <p>Payment successful! You can now submit the form.</p>
        )}

        {showBatchUpdateForm && (
          <BatchUpdateForm onBatchUpdate={handleBatchUpdateFormClose} />
        )}
      </div>
    </div>
  );
}

export default App;
