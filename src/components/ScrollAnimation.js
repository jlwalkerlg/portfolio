import React, { useEffect, useRef } from 'react';
import throttle from '../utils/throttle';

// If browser supports IntersectionObserver API.
let observer;

// If browser does not support IntersectionObserver API.
let listener;
let elements = [];
let checkElement;
let handleScroll;
let onDocumentScroll;

if ('IntersectionObserver' in window) {
  const intersectionObserverHandler = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const { animation } = element.dataset;
        element.classList.add('animated', ...animation.split(' '));
        observer.unobserve(element);
      }
    });
  };

  observer = new IntersectionObserver(intersectionObserverHandler);
} else {
  checkElement = element => {
    const elementPosition = element.getBoundingClientRect();

    // If element in viewport, animate, then remove from array.
    if (
      elementPosition.top <= window.innerHeight &&
      elementPosition.bottom >= 0
    ) {
      const { animation } = element.dataset;
      element.classList.add('animated', ...animation.split(' '));

      // Remove image from array.
      elements = elements.filter(el => el !== element);

      // Remove event listeners if all elements have been animated.
      if (!elements.length) {
        document.removeEventListener('scroll', onDocumentScroll);
      }
    }
  };

  handleScroll = () => {
    elements.forEach(element => {
      checkElement(element);
    });
  };

  onDocumentScroll = throttle(handleScroll, 50);
}

const ScrollAnimation = ({ animation, children }) => {
  const ref = useRef(null);

  // Set up listener.
  useEffect(() => {
    const element = ref.current;

    if (observer) {
      observer.observe(element);
    } else {
      elements.push(element);
      if (!listener) {
        listener = document.addEventListener('scroll', onDocumentScroll);
      }
      checkElement(element);
    }

    return () => {
      if (observer) {
        observer.unobserve(element);
      } else {
        elements = elements.filter(el => el !== element);
        if (!elements.length) {
          document.removeEventListener('scroll', onDocumentScroll);
          listener = null;
        }
      }
    };
  }, []);

  return (
    <div ref={ref} data-animation={animation}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
