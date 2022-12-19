import React from 'react';

export default class DrawerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClickModal = this.handleClickModal.bind(this);
    this.handleClickItem = this.handleClickItem.bind(this);
  }

  handleClickModal() {
    this.setState({ isClicked: true });
  }

  handleClickItem() {
    this.setState({ isClicked: false });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div className='overlay'>
          <div>
            <div className='menu'>
              <p className='header'>Main Menu</p>
              <ul className='list'>
                <li onClick={this.handleClickItem}>Home</li>
                <li onClick={this.handleClickItem}>Image</li>
                <li onClick={this.handleClickItem}>About us</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (!this.state.isClicked) {
      return (
        <i className="fa-solid fa-bars bar" onClick={this.handleClickModal}></i>
      );
    }
  }
}
