// @flow

import React, { Component } from 'react';
import './App.css';
import Palette from './components/Palette';
import Paper from './components/Paper';
import BrushJar from './components/BrushJar';
import createPaints from './util/createPaints';
import createPixels from './util/createPixels';
import type { paintType, paletteType } from './types/PaintType';
import type { pixelType } from './types/PixelType';


type stateShape = {
  currentPaint: string,
  paints: paletteType,
  pixels: pixelType[],
  brushSize: number
};

class App extends Component<void, stateShape> {

  constructor() {
    super();
    this.state = {
      currentPaint: 'APPLE_FRAME',
      paints: createPaints(),
      pixels: createPixels(),
      brushSize: 1
    };
  }

  updateBrushSize(difference: number): void {
    let newBrushSize = this.state.brushSize + difference;
    if (newBrushSize > 0) {
      this.setState({ brushSize: newBrushSize });
    }
  }

  setSelectedColor(colorKey: string): void {
    this.setState({currentPaint: colorKey});
  }

  changeColor(colorKey: string, newValue: string): void {
    let oldPaints = this.state.paints;
    oldPaints[colorKey]['color'] = newValue;
    this.setState({ paints: oldPaints });
  }

  updatePixels(pixelIndexes: number[]): void {
    let newPixels = this.state.pixels;
    let newPaints = this.state.paints;

    let newState = {
      pixels: newPixels,
      paints: newPaints
    }

    pixelIndexes.map((p: number): void => {
      newState = this.updatePixelWithoutSave(p, newState);
    });

    this.setState(newState);
  }

  updatePixelWithoutSave(pixelIndex: number, stateSnapshot: {
    pixels: pixelType[],
    paints: paletteType
  }): { pixels: pixelType[], paints: paletteType } {
    if (this.unpaintable()) return stateSnapshot;
    stateSnapshot.paints = this.updateCounts(pixelIndex, stateSnapshot.pixels, stateSnapshot.paints);
    stateSnapshot.pixels[pixelIndex].color = this.state.currentPaint;
    return stateSnapshot;
  }

  updatePixel(pixelIndex: number): void {
    if (this.unpaintable()) return;

    let oldPixels = this.state.pixels;
    let oldPaints = this.state.paints;

    oldPaints = this.updateCounts(pixelIndex, oldPixels, oldPaints);
    oldPixels[pixelIndex].color = this.state.currentPaint;

    this.setState({pixels: oldPixels, paints: oldPaints});
  }

  unpaintable(): boolean {
    const thisPaint: paintType = this.currentPaint();
    if (!thisPaint.currentCount) return false;
    return (thisPaint.currentCount >= thisPaint.count);
  }

  updateCounts(pixelIndex: number, oldPixels: pixelType[], oldPaints: paletteType): paletteType {
    let oldColor: string = oldPixels[pixelIndex].color;
    oldPaints[oldColor].currentCount -= 1;
    oldPaints[this.state.currentPaint].currentCount += 1;

    return oldPaints;
  }

  currentPaint(): paintType {
    return this.state.paints[this.state.currentPaint];
  }

  saveStatus(): void {
    localStorage.setItem('bobross-paints', JSON.stringify(this.state.paints));
    localStorage.setItem('bobross-pixels', JSON.stringify(this.state.pixels));
  }

  render() {
    return (
      <div className="App">
        <div className="App__left">
          <Paper 
            currentPaint={this.currentPaint()} 
            brushSize={this.state.brushSize} 
            pixels={this.state.pixels} 
            paints={this.state.paints} 
            updatePixel={this.updatePixel.bind(this)} 
            updatePixels={this.updatePixels.bind(this)} 
          />

          <BrushJar
            updateBrushSize={this.updateBrushSize.bind(this)}
            brushSize={this.state.brushSize}
            currentPaint={this.currentPaint()}
            changeColor={this.changeColor.bind(this)}
            saveStatus={this.saveStatus.bind(this)} 
          />
        </div>

        <div className="App__right">
          <Palette 
            paints={this.state.paints} 
            changeColor={this.changeColor.bind(this)} 
            setSelectedColor={this.setSelectedColor.bind(this)}
          />
        </div>

      </div>
    );
  }
}

export default App;
