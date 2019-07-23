const throttle = (handler, delay, ...args) => {
  let nextRequest = 0;
  let now;
  return () => {
    now = Date.now();
    if (now > nextRequest) {
      nextRequest = now + delay;
      handler.call(this, ...args);
    }
  };
};

export default throttle;
