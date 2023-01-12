import React from 'react';

export default class CarouselComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      imgId: 0,
      img: null
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.dotView = this.dotView.bind(this);
    this.rotation = this.rotation.bind(this);
  }

  componentDidMount() {
    this.rotation();
  }

  rotation() {
    this.timer = setInterval(() => {
      if (this.state.imgId === 3) {
        this.setState({
          imgId: 0
        });
      } else {
        this.setState({
          imgId: this.state.imgId + 1
        });
      }

    }, 3000);
  }

  handleNext(event) {
    this.setState({ isClicked: !this.state.isClicked });

    if (this.state.imgId === 3) {
      this.setState({
        imgId: 0
      });
    } else if (this.state.imgId < 3) {
      this.setState({
        imgId: this.state.imgId + 1
      });
    }

    clearInterval(this.timer);
    this.rotation();
  }

  handlePrev(event) {
    this.setState({ isClicked: !this.state.isClicked });

    if (this.state.imgId === 0) {
      this.setState({
        imgId: 3
      });
    } else if (this.state.imgId <= 3) {
      this.setState({
        imgId: this.state.imgId - 1
      });
    }
    clearInterval(this.timer);
    this.rotation();
  }

  dotView(event) {
    this.setState({
      imgId: Number(event.target.getAttribute('id'))
    });
    clearInterval(this.timer);
    this.rotation();
  }

  render() {
    return (
      <>
        <div className='row text-center'>
          <div className='col'>
            <i className='fa-solid fa-chevron-left left-arrow' onClick={this.handlePrev}/>
          </div>
          <div className='col'>
            <img src={this.props.imagePath[this.state.imgId].image} />
          </div>
          <div className='col'>
            <i className='fa-solid fa-chevron-right right-arrow' onClick={this.handleNext}/>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <i className={this.state.imgId === 0 ? 'fa-solid fa-circle circle-size' : 'fa-regular fa-circle circle-size'} onClick={this.dotView} id='0' key={0}/>
            <i className={this.state.imgId === 1 ? 'fa-solid fa-circle circle-size' : 'fa-regular fa-circle circle-size'} onClick={this.dotView} id='1' key={1} />
            <i className={this.state.imgId === 2 ? 'fa-solid fa-circle circle-size' : 'fa-regular fa-circle circle-size'} onClick={this.dotView} id='2' key={2} />
            <i className={this.state.imgId === 3 ? 'fa-solid fa-circle circle-size' : 'fa-regular fa-circle circle-size'} onClick={this.dotView} id='3' key={3} />
          </div>
        </div>
      </>
    );
  }
}
