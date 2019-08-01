import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Observer from '../utils/observer';

const handler = (element, observer) => {
  element.classList.add('animated');
  observer.unobserve(element);
};

const observer = new Observer(handler);

const ScrollAnimation = ({ animation, rootMargin, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    observer.observe(element, { rootMargin });

    return () => {
      observer.unobserve(element);
    };
  }, [rootMargin]);

  return (
    <div ref={ref} className={`animatable ${animation}`}>
      {children}
    </div>
  );
};

ScrollAnimation.defaultProps = {
  rootMargin: -150,
};

ScrollAnimation.propTypes = {
  animation: PropTypes.string.isRequired,
  rootMargin: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  ]).isRequired,
};

export default ScrollAnimation;
