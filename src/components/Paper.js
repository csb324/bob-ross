import React, { Component } from 'react';
import pixelType from '../types/PixelType';
import { HEIGHT, WIDTH, PIXEL_SIZE } from '../constants';
import './Paper.css';

class Paper extends Component {
  
  props: {
    pixels: pixelType[],
    updatePixel: (number: number) => void,
    updatePixels: (numbers: number[]) => void,
    brushSize: number
  }

  getIndexFromCoordinates(x, y): number {
    return (y * WIDTH) + x;
  }
  componentDidMount() {
    this.updateCanvas();
    let mouseIsDown = false;
    
    const canvas = this.refs.canvas;

    const draw = (e) => {
      let [gridX, gridY] = [Math.floor(e.offsetX / PIXEL_SIZE), Math.floor(e.offsetY / PIXEL_SIZE)];

      let pixelsToDraw = [];

      for (let index = 0; index < this.props.brushSize; index++) {
        for (let indexY = 0; indexY < this.props.brushSize; indexY++) {
          const x = gridX + index;
          const y = gridY + indexY;
          const pixelIndex = this.getIndexFromCoordinates(x, y);
          if (x < WIDTH && y < HEIGHT) {
            pixelsToDraw.push(pixelIndex);            
          }
        }
      }
      
      this.props.updatePixels(pixelsToDraw);
    }

    canvas.addEventListener('mousemove', (e) => {
      if (!mouseIsDown) return;
      draw(e)
    });

    canvas.addEventListener('mousedown', (e) => {
      mouseIsDown = true
      draw(e);
    });

    canvas.addEventListener('mouseup', () => mouseIsDown = false);
    canvas.addEventListener('mouseout', () => mouseIsDown = false);
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    this.ctx = this.refs.canvas.getContext('2d');
    this.props.pixels.forEach((pixel) => {
      this.ctx.fillStyle = this.props.paints[pixel.color].color;
      this.ctx.fillRect(pixel.x * PIXEL_SIZE, pixel.y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    });
  }

  render() {
    return (
      <div className="paper">
        <canvas ref="canvas" id="paper" height={HEIGHT * PIXEL_SIZE} width={WIDTH * PIXEL_SIZE} />
      </div>
    );
  }
}


export default Paper;