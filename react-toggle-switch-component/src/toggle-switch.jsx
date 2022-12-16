import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: true };
    // bind
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    this.setState(switched => ({
      toggled: !switched.toggled
    }));
    // eslint-disable-next-line
    console.log(this.state.toggled);
  }

  render() {
    if (this.state.toggled === false) {
      return (
        <>
          <label htmlFor='switch'>On</label>
          <input name='switch'type="checkbox" onClick={this.toggleButton} className="switch"></input>
        </>
      );
    } else {
      return (
        <>
          <label htmlFor='switch'>Off</label>
          <input name='switch' type="checkbox" onClick={this.toggleButton} className="switch"></input>
        </>
      );
    }
    // return (
    //   <>
    //     <label htmlFor='switch'>{this.state.toggled ? 'Off' : 'On'}</label>
    //     <input name='switch'type="checkbox" onClick={this.toggleButton} className="switch"></input>
    //   </>
    // );
  }
}

export default ToggleSwitch;
