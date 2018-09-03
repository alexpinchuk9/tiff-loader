import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Tiff from 'tiff.js'

export default class TiffLoader extends Component {

  componentDidMount() {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'arraybuffer';
    xhr.open('GET', this.props.url);
    xhr.onload = (e) => {
      var tiff = new Tiff({buffer: xhr.response});
      const canvas = tiff.toCanvas()
      ReactDOM.findDOMNode(this).appendChild(canvas)
    };
    xhr.send();
  }

  render() {
   return (
     <div />
   )
  }
  
}