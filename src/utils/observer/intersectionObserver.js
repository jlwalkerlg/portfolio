class Observer {
  constructor(handler) {
    this.handler = handler;
    this.defaultRootMargin = 0;
    this.observers = [];
  }

  observe(element, { rootMargin }) {
    // eslint-disable-next-line no-param-reassign
    element.dataset.observerId = this.observers.length;

    const options = {
      rootMargin: `${+rootMargin || this.defaultRootMargin}px 0px`,
    };

    const observer = new IntersectionObserver(
      this.handleScroll.bind(this),
      options
    );

    observer.observe(element);

    this.observers.push(observer);
  }

  unobserve(element) {
    const { observerId } = element.dataset;
    const observer = this.observers[observerId];
    observer.unobserve(element);
    this.observers[observerId] = null;
  }

  handleScroll(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        this.handler(element, this);
      }
    });
  }
}

export default Observer;
