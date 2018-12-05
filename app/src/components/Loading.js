import React, { Component } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dots: "",
      dotsMax: 5,
      dotsWait: 250,
      interval: null
    };
    this.updateDots = this.updateDots.bind(this);
  }
  componentDidMount() {
    this.setState({
      interval: setInterval(this.updateDots, this.state.dotsWait),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  updateDots() {
    const numDots = this.state.dots.length;
    let dots = this.state.dots;
    if (numDots >= this.state.dotsMax) {
      dots = '';
    } else {
      dots += '.';
    }
    this.setState({
      dots
    });
  }
  render() {
    return (
      <div>
        <img id="loading" src="/assets/loading.gif" />
        <div id="loading-text">Loading{this.state.dots}</div>
      </div>
    );
  }
}

export default Loading;