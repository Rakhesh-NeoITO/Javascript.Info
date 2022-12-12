class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    
    let precision = options.precision;
    if(options.precision == null) precision = 1000;
    console.log(precision);
    this.precision = precision
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 2000
});

lowResolutionClock.start();