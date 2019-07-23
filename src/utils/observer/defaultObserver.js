import throttle from '../throttle';

class Observer {
  constructor(handler) {
    this.handler = handler;
    this.listening = false;
    this.elements = [];
    this.handleScroll = throttle(this.handleScroll.bind(this), 50);
  }

  observe(element) {
    // Add element to elements array.
    this.elements.push(element);

    // Add listeners if not already set.
    if (!this.listening) {
      this.addListeners();
    }

    // Immediately check element position.
    this.checkElement(element);
  }

  unobserve(element) {
    // Remove element from elements array.
    this.elements = this.elements.filter(el => el !== element);

    // Remove event listeners if no elements are left to observe.
    if (!this.elements.length) {
      this.removeListeners();
    }
  }

  addListeners() {
    document.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
    window.addEventListener('orientationchange', this.handleScroll);
    this.listening = true;
  }

  removeListeners() {
    document.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
    window.removeEventListener('orientationchange', this.handleScroll);
    this.listening = false;
  }

  handleScroll() {
    this.elements.forEach(element => {
      if (this.checkElement(element)) {
        this.handler(element, this);
      }
    });
  }

  checkElement(element) {
    const elementPosition = element.getBoundingClientRect();

    if (
      elementPosition.top <= window.innerHeight &&
      elementPosition.bottom >= 0
    ) {
      return true;
    }

    return false;
  }
}

export default Observer;
