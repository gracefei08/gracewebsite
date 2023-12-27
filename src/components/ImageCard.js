import React from 'react';
import art1 from './pages/art/1.png';
import art2 from './pages/art/2.jpg';
import art3 from './pages/art/3.png';
import art4 from './pages/art/4.png';
import art5 from './pages/art/5.png';
import art6 from './pages/art/6.png';
import art7 from './pages/art/7.jpg';
import art8 from './pages/art/8.JPG';
import art9 from './pages/art/9.jpg';
import art10 from './pages/art/10.jpg';



export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
  }
  
  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); //each grid height is 10px

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img  src={art1} />
        <img  src={art2} />
        <img  src={art3} />
        <img  src={art4} />
        <img  src={art5} />
        <img  src={art6} />
        <img  src={art7} />

      </div>
    );
  }
}
