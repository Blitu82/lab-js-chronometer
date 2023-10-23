class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    const seconds = Math.floor(this.currentTime / 100) % 60;
    return seconds;
  }

  getCentiseconds() {
    // ... your code goes here
    const centiseconds = this.currentTime % 100;
    return centiseconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2, '0');
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
