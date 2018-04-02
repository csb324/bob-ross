// @flow 

import React, { Component } from 'react';
import './BrushJar.css';
import PaintSwatch from './PaintSwatch';
import type { paintType } from '../types/PaintType';

class BrushJar extends Component<{
    updateBrushSize: (difference: number) => void,
    brushSize: number,
    changeColor: (colorKey: string, newValue: string) => void,
    currentPaint: paintType
  }> {

  increaseBrushSize() {
    this.props.updateBrushSize(1);
  }
  decreaseBrushSize() {
    this.props.updateBrushSize(-1);
  }

  changeColor() {
    return ((newVal: string) => {
      this.props.changeColor(this.props.currentPaint.paintName, newVal);
    });
  }

  render() {
    return (
      <div className="brush-jar">
        <div className="brush-jar__size-buttons">
          <a className="brush-jar__button" onClick={this.increaseBrushSize.bind(this)}>+</a>
          <a className="brush-jar__button" onClick={this.decreaseBrushSize.bind(this)}>-</a>
        </div>

        <div className="brush-jar__current-paint">

          <PaintSwatch 
            dataPoint={this.props.currentPaint.paintName} 
            changeColor={this.changeColor().bind(this)} 
            selectColor={() => { return }}
            {...this.props.currentPaint} />

        </div>
        <span className="brush-jar__label">brush size: {this.props.brushSize}</span>


      </div>
    )
  }
}

export default BrushJar;