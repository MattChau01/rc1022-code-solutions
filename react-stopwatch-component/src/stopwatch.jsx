import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      counter: 0
    };
    this.timer = this.timer.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
    // console.log(this.state);
  }

  timer() {
    this.setState({ isStarted: !this.state.isStarted });
    if (this.state.isStarted) {
      // console.log('Stopwatch');
      clearInterval(this.intervalId);
    } else {
      this.intervalId = setInterval(() => {
        return this.setState({ counter: this.state.counter + 1 });
      }, 1000);
    }
  }

  resetWatch() {
    this.setState({ counter: 0 });
  }

  render() {
    const number = this.state.counter;
    // eslint-disable-next-line
    console.log(this.state.isStarted);
    if (this.state.isStarted) {
      return (
        <>
          <i className="fa-regular fa-circle circle"></i>
          <p>{number}</p>
          <i className="fa-solid fa-pause pause" onClick={this.timer}></i>
        </>
      );
    } else if (!this.state.isStarted) {
      return (
        <>
          <i className="fa-regular fa-circle circle" onClick={this.resetWatch}></i>
          <p>{number}</p>
          <i className="fa-solid fa-play play" onClick={this.timer}></i>
        </>
      );
    } else {
      return (
        <>
          <i className="fa-regular fa-circle circle"></i>
          <p>{number}</p>
          <i className="fa-solid fa-play play" onClick={this.timer}></i>
        </>
      );
    }
  }
}

export default StopWatch;
