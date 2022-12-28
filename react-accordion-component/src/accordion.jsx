import React from 'react';

class AccordionComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      currentView: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      isClicked: !this.state.isClicked,
      currentView: event.target.getAttribute('id')
    });
    // console.log('id: ', this.state.currentView);
    // console.log('clicked: ', this.state.isClicked);
  }

  render() {

    return (
      <div className='list'>
        {this.props.topics.map((language, index) => {
          if (this.state.currentView === language.num && this.state.isClicked === true) {
            return (
              <>
                <div className='modal-box' onClick={this.handleClick} key={language.num} id={index}>
                  {language.name}
                </div>
                <div className='modal-content'>
                  {language.description}
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className='modal-box' onClick={this.handleClick} key={language.num} id={index}>
                  {language.name}
                  {this.currentView === language.num && this.isClicked(
                    <div className='modal-content'>
                      {language.description}
                    </div>
                  )}
                </div>
              </>
            );
          }
        }
        )}
      </div>
    );

  }
}

export default AccordionComp;
