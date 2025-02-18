import React from 'react';

const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title fw-bold h4">Coming Soon! 🚀</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4 pb-4">
            <p className="mb-4">
              We're crafting an experience designed to help you work smarter, stay motivated, and feel good doing it. Every detail is being shaped to bring you a seamless and engaging way to boost productivity.
            </p>
            <p className="mb-0">
              It won't be long before you can dive in and see it all in action. Stay tuned—the best is yet to come! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
