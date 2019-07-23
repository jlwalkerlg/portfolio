import throttle from '../throttle';

class Observer {
  constructor(handler) {
    this.handler = handler;
    this.listener = null;
    this.elements = [];
    this.handleScroll = throttle(this.handleScroll.bind(this), 50);
  }

  observe(element) {
    // Add element to elements array.
    this.elements.push(element);

    // Add listener if not already set.
    if (!this.listener) {
      this.listener = document.addEventListener('scroll', this.handleScroll);
    }

    // Immediately check element position.
    this.checkElement(element);
  }

  unobserve(element) {
    // Remove element from elements array.
    this.elements = this.elements.filter(el => el !== element);

    // Remove event listener if no elements are left to observe.
    if (!this.elements.length) {
      document.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll() {
    this.elements.forEach(element => {
      this.checkElement(element);
    });
  }

  checkElement(element) {
    const elementPosition = element.getBoundingClientRect();

    if (
      elementPosition.top <= window.innerHeight &&
      elementPosition.bottom >= 0
    ) {
      this.handler(element, this);
    }
  }
}

export default Observer;
