import React, { useEffect, useRef } from 'react';
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

export default ScrollAnimation;
