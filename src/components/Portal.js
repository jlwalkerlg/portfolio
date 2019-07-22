import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const portal = document.createElement('div');

const Portal = ({ children }) => {
  useEffect(() => {
    document.body.appendChild(portal);
    return () => document.body.removeChild(portal);
  });

  return ReactDOM.createPortal(children, portal);
};

Portal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Portal;
