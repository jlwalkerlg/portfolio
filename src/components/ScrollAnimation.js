import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Observer from '../utils/observer';

const handler = (element, observer) => {
  const { animation } = element.dataset;
  element.classList.add('animated', ...animation.split(' '));
  observer.unobserve(element);
};

const observer = new Observer(handler);

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
    <div ref={ref} data-animation={animation}>
      {children}
    </div>
  );
};

ScrollAnimation.propTypes = {
  animation: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ScrollAnimation;
