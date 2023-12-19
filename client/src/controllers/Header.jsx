// Header.jsx
import PropTypes from 'prop-types';
import '../styles/header.css';

function Header({ onBatchUpdateClick }) {
  return (
    <header>
      <h1>Yoga Classes Registration</h1>
      <button className='update' onClick={onBatchUpdateClick}>For Registered Candidates </button>
    </header>
  );
}

Header.propTypes = {
  onBatchUpdateClick: PropTypes.func.isRequired,
};

export default Header;
