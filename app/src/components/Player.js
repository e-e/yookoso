import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: props.track.source,
      speed: 1.0,
      audio: null,
      input: null,
    };

    this.changeSpeed = this.changeSpeed.bind(this);
  }
  componentDidMount() {
    const audio = document.querySelector('#audio');
    const input = document.querySelector('#speed');
    this.setState({ audio, input });
    if (this.props.settings.autoplay && audio.paused) {
      audio.play();
    }
  }

  nextTrack() {

  }

  previousTrack() {

  }

  changeSpeed(event) {
    event.persist();

    const input = event.target;
    const speed = parseFloat(event.target.value);

    this.state.audio.playbackRate = speed;
    this.setState({ speed });
    console.log('speed: ', speed);
  }
  render() {
    return (
      <div className="player">
        <Header
          book={this.props.book.name}
          chapter={this.props.chapter.number}
          track={this.props.track.title}  />

        <Nav />

        <div>
          <audio id="audio" src={this.state.source} controls autoPlay={this.props.settings.autoplay} />
        </div>
        <div style={{margin: '10px'}}>
          <div>
            <input className="slider" id="speed" onInput={this.changeSpeed} type="range" min="0.1" max="1.0" step="0.1" defaultValue={this.state.speed} />
          </div>
          <div className="audio-speed-label">
            { this.state.speed }x Speed
          </div>
        </div>
      </div>
    );
  }
}

export default Player;