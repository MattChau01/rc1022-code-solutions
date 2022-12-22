import React from 'react';

class AccordionComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      currentView: null
    };
    this.props.topics = [
      {
        num: '0',
        name: 'Hypertext Markup Language',
        description: 'HTML (HyperText Markup Language) is the most basic building block of the Web.'
      },
      {
        num: '1',
        name: 'Cascading Style Sheets',
        description: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.'
      },
      {
        num: '2',
        name: 'JavaScript',
        description: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.'
      }
    ];
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
