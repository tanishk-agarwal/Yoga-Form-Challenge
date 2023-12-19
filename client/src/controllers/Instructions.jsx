// Instructions.jsx
import '../styles/instructions.css';

function Instructions() {
  return (
    <div className="instructions">
      <h2>Instructions</h2>
      <p>
        Welcome to our Yoga Classes Admission Form! Please follow the instructions below:
      </p>
      <ul>
        <li>Fill in your name, date of birth, and select a batch on the right side.</li>
        <li>The age limit is 18-65 years.</li>
        <li>Participants can choose any batch and shift to another batch in different months.</li>
        <li>Payment of 500 INR is required every month.</li>
      </ul>
    </div>
  );
}

export default Instructions;
