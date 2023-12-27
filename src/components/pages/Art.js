import React from 'react';
import ImageList from '../ImageList';
import art1 from './art/1.png';



class App extends React.Component {
  state = { images: [art1] };
  

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;