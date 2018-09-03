import React, { Component } from 'react'
import TiffLoader from './TiffLoader'

class App extends Component {

  render() {
    return (
      <div>
        <div>Hi TIFF</div>
        <TiffLoader url={require('./CCITT_1.TIF')} />
      </div>
    );
  }

}

export default App;