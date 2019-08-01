import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Observer from '../utils/observer';

const handler = (element, observer) => {
  element.classList.add('animated');
  observer.unobserve(element);
};

const options = {
  rootMargin: -50,
};

const observer = new Observer(handler, options);

const ScrollAnimation = ({ animation, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={ref} className={`animatable ${animation}`}>
      {children}
    </div>
  );
};

ScrollAnimation.propTypes = {
  animation: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  ]).isRequired,
};

export default ScrollAnimation;
