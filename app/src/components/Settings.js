import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import {
  toggleAutoplay,
  toggleAutoAdvance
} from '../actions';
import { debug } from '../utils';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsVisible: false,
    };
    this.toggleSettings = this.toggleSettings.bind(this);
  }
  toggleSettings() {
    this.setState({
      settingsVisible: !this.state.settingsVisible
    });
  }
  render() {
    let settingsClassname = 'settings';
    if (this.state.settingsVisible) {
      settingsClassname += ' open';
    }
    return (
      <div className={settingsClassname}>
        <div className="settings-header" onClick={this.toggleSettings}>
          Settings
          <span className="settings-arrow">&#11165;</span>
        </div>
        <div className="settings-body">
          <div>
            <input id="autoplay" onChange={this.props.toggleAutoplay} type="checkbox" checked={this.props.settings.autoplay} />
            <label htmlFor="autoplay">Autoplay</label>
          </div>
          <div>
            <input id="auto-advance" onChange={this.props.toggleAutoAdvance} type="checkbox" checked={this.props.settings.autoAdvance} />
            <label htmlFor="auto-advance" title="Automatically advance to the next track in this chapter when current track finishes">Auto-advance</label>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  debug('SETTINGS STATE', state);

  return {
    settings: state.settings,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAutoplay() {
      dispatch(toggleAutoplay());
    },
    toggleAutoAdvance() {
      dispatch(toggleAutoAdvance());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);