import React, { Component } from 'react';
import './IronImage.css';

class IronImage extends Component {

  componentDidMount() {

    const ironImageHd = document.querySelector('.iron-image-loaded');
    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.srcLoaded;

    hdLoaderImg.onload = () => {
      ironImageHd.setAttribute('style', `background-image: url('${this.props.srcLoaded}')`);
      ironImageHd.classList.add('iron-image-fade-in');
    }
  }

  render() {
    return (
      <div className="iron-image-container">
        <div className="iron-image-loaded"></div>
        <div className="iron-image-preload" style={{ backgroundImage: `url('${this.props.srcPreload}')` }}></div>
      </div>
    )
  }

}

export default IronImage;