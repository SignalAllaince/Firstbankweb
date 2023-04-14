const defaultDuration = 500;

export const sleep = (duration = defaultDuration): Promise<undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, duration);
  });
};

export const block = (duration = defaultDuration) => {
  const start = performance.now();
  while (performance.now() < start + duration) {
    /* empty */
  }
};

export const makeExpensive = <T extends (..._args: any[]) => any>(
  fn: T,
  duration = defaultDuration
): ((..._args: Parameters<T>) => ReturnType<T>) => {
  return (...args: Parameters<T>): ReturnType<T> => {
    block(duration);
    return fn(...args);
  };
};

export class Timer {
  public timerId: any;
  private remaining;
  private start;

  constructor(public callback: Function, public delay: number) {
    this.delay = delay;
    this.remaining = delay;
    this.start = delay;
    this.callback = callback;
  }

  pause = () => {
    if (this.timerId) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
      this.remaining -= Date.now() - this.start;
      // console.log(this.remaining, "remains");
    }
  };

  play = () => {
    if (this.timerId) {
      return;
    }

    this.start = Date.now();
    // console.log(this.start);
    this.timerId = window.setTimeout(this.callback, this.remaining);
  };
}

export class Clock {
  private timer: any = null;

  constructor(public template: string) {
    this.template = template;
  }
  render = () => {
    let date = new Date();

    let hours = String(date.getHours());
    if (+hours < 10) hours = "0" + hours;

    let mins = String(date.getMinutes());
    if (+mins < 10) mins = "0" + mins;

    let secs = String(date.getSeconds());
    if (+secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };

  stop = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
  };

  start = () => {
    if (!this.timer) {
      this.render();
      this.timer = setInterval(this.render, 1000);
    }
  };
}

// let clock = new Clock('h:m:s');
// clock.start();
