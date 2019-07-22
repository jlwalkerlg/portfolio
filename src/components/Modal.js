import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Portal from './Portal';

const Modal = ({ children, label, onClose }) => {
  const modalRef = useRef(null);
  const modalOverlayRef = useRef(null);

  const initiator = document.activeElement;

  const handleOverlayKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClose(e);
    }
  };

  const handleDocumentKeyDown = e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose(e);
    }
  };

  const handleRootKeyDown = e => {
    e.preventDefault();
    initiator.focus();
    modalOverlayRef.current.focus();
  };

  // Make app root un-tabbable.
  useEffect(() => {
    const root = document.querySelector('#root');

    root.setAttribute('tab-index', '-1');
    root.setAttribute('aria-hidden', 'true');
    root.addEventListener('focus', handleRootKeyDown, true);

    return () => {
      root.removeAttribute('tab-index');
      root.removeAttribute('aria-hidden');
      root.removeEventListener('focus', handleRootKeyDown, true);
    };
  });

  // Add no-scroll class to document.body.
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  });

  // Focus modal overlay.
  useEffect(() => modalOverlayRef.current.focus());

  // Cycle focus.
  useEffect(() => {
    const modal = modalRef.current;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    const handleModalKeyDown = e => {
      if (e.key === 'Tab') {
        if (document.activeElement === firstFocusableElement && e.shiftKey) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
        if (document.activeElement === lastFocusableElement && !e.shiftKey) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleModalKeyDown);

    return () => modal.removeEventListener('keydown', handleModalKeyDown);
  });

  // Close modal on escape key.
  useEffect(() => {
    document.addEventListener('keydown', handleDocumentKeyDown);
    return () => document.removeEventListener('keydown', handleDocumentKeyDown);
  });

  // Focus initiating element on modal close.
  useEffect(() => {
    return () => initiator.focus();
  });

  return (
    <Portal>
      <div
        className="modal"
        ref={modalRef}
        aria-label={label}
        aria-modal="true"
        role="dialog"
      >
        <div
          role="button"
          tabIndex="0"
          className="modal__overlay"
          onClick={onClose}
          onKeyDown={handleOverlayKeyDown}
          ref={modalOverlayRef}
        />

        <div className="modal__container">{children}</div>

        <button type="button" className="modal__close" onClick={onClose}>
          <span className="sr-only">Close Modal</span>
        </button>
      </div>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
