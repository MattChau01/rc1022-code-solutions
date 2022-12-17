import React from 'react';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isClicked: false
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.isClicked });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    // eslint-disable-next-line
    console.log('State: ', this.state)
    event.preventDefault();
    this.setState({ password: '' });
  }

  render() {
    if ((this.state.password === '') && (this.state.isClicked === true)) {
      return (
        <>
          <form>
            <label htmlFor='password' value='Password'>Password</label> <br/>
            <input name='password' type='text' value={this.state.password} onChange={this.handlePasswordChange} onClick={this.handleClick}/>
            <i className='fa-solid fa-xmark wrong'></i>
            <p>A password is required.</p>
          </form>
        </>
      );
    } else if (this.state.password.length < 8 && this.state.isClicked) {
      return (
        <>
          <form>
            <label htmlFor='password' value='Password'>Password</label> <br />
            <input name='password' type='text' value={this.state.password} onChange={this.handlePasswordChange} onClick={this.handleClick} />
            <i className='fa-solid fa-xmark wrong'></i>
            <p>Your password is too short</p>
          </form>
        </>
      );
    } else if (this.state.password.length >= 8 && this.state.isClicked) {
      return (
        <>
          <form>
            <label htmlFor='password' value='Password'>Password</label> <br />
            <input name='password' type='text' value={this.state.password} onChange={this.handlePasswordChange} onClick={this.handleClick} />
            <i className="fa-solid fa-check correct"></i>
          </form>
        </>
      );
    } else {
      return (
        <>
          <form>
            <label htmlFor='password' value='Password'>Password</label> <br />
            <input name='password' type='text' value={this.state.password} onClick={this.handleClick} onChange={this.handlePasswordChange} />
          </form>
        </>
      );
    }
  }
}

export default Password;
