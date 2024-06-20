import React from 'react';
import '../components/LogoutConfirmationModal.css'

const LogoutConfirmationModal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to logout?</p>
        <button onClick={onConfirm} className="confirm-btn">Yes</button>
        <button onClick={onClose} className="cancel-btn">No</button>
      </div>
    </div>
  );
};

export default LogoutConfirmationModal;
