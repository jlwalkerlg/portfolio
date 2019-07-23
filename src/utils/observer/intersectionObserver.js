class Observer {
  constructor(handler) {
    this.handler = handler;
    this.observer = new IntersectionObserver(this.handleScroll.bind(this));
  }

  observe(element) {
    this.observer.observe(element);
  }

  unobserve(element) {
    this.observer.unobserve(element);
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
