import React, { Component } from 'react';
import ColorInput from './ColorInput';
import './PaintSwatch.css';

function hexToR(h) { return parseInt((cutHex(h)).substring(0, 2), 16) }
function hexToG(h) { return parseInt((cutHex(h)).substring(2, 4), 16) }
function hexToB(h) { return parseInt((cutHex(h)).substring(4, 6), 16) }
function cutHex(h) { return (h.charAt(0) === "#") ? h.substring(1, 7) : h }

class PaintSwatch extends Component {

  props: {
    selectColor: () => void,
    changeColor: (string) => void,
    color: string,
    dataPoint: string,
    count: number,
    currentCount?: number
  }

  labelColor() {
    const threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */
    const hex = this.props.color;
    const hRed = hexToR(hex);
    const hGreen = hexToG(hex);
    const hBlue = hexToB(hex);

    const cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;

    if (cBrightness > threshold) { return "#000000"; } else { return "#ffffff"; }
  }

  remaining() {
    if (this.props.currentCount) {
      return (this.props.count - this.props.currentCount);
    } else {
      return this.props.count;
    }
  }

  isAvailable() {
    return (this.remaining() > 0);
  }

  
  render() {
    return (
      <div className="paint-swatch">

        <a href="#" className="paint-swatch__select" style={{ backgroundColor: this.props.color, color: this.labelColor() }} onClick={this.props.selectColor}>
          <div className="paint-swatch__count"> {this.remaining()} / {this.props.count} </div>          
        </a>

        <div className="paint-swatch__details">
          <div className="paint-swatch__name">{this.props.dataPoint.toLowerCase().split("_").join(" ")}</div>
          <ColorInput color={this.props.color} updateColor={this.props.changeColor} />
        </div>
      </div>
    );
  }
}

export default PaintSwatch;
