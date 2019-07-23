import DefaultObserver from './defaultObserver';
import IntersectionObserver from './intersectionObserver';

export default 'IntersectionObserver' in window
  ? IntersectionObserver
  : DefaultObserver;
