class Observer {
  constructor(handler, { rootMargin }) {
    this.handler = handler;

    const options = {
      rootMargin: `${rootMargin}px 0px`,
    };

    this.observer = new IntersectionObserver(
      this.handleScroll.bind(this),
      options
    );
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
