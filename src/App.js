import React, { Component } from 'react';
import './App.css';
import Palette from './components/Palette';
import Paper from './components/Paper';
import { HEIGHT, WIDTH, PIXEL_SIZE } from './constants';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentPaint: 'APPLE_FRAME',
      paints: {
        ERASE: { count: 3220, color: "#ffffff", currentCount: 3220 },
        APPLE_FRAME: { count: 0, color: "#BBFFFF" },
        AURORA_BOREALIS: { count: 2, color: "#00FFFF" },
        BARN: { count: 17, color: "#55FFFF" },
        BEACH: { count: 27, color: "#FFBBFF" },
        BOAT: { count: 2, color: "#BBBBFF" },
        BRIDGE: { count: 7, color: "#00BBFF" },
        BUILDING: { count: 1, color: "#55BBFF" },
        BUSHES: { count: 120, color: "#FF00FF" },
        CABIN: { count: 69, color: "#BB00FF" },
        CACTUS: { count: 4, color: "#0000FF" },
        CIRCLE_FRAME: { count: 2, color: "#5500FF" },
        CIRRUS: { count: 28, color: "#FF55FF" },
        CLIFF: { count: 8, color: "#BB55FF" },
        CLOUDS: { count: 179, color: "#0055FF" },
        CONIFER: { count: 212, color: "#5555FF" },
        CUMULUS: { count: 86, color: "#FFFFBB" },
        DECIDUOUS: { count: 227, color: "#BBFFBB" },
        DIANE_ANDRE: { count: 1, color: "#00FFBB" },
        DOCK: { count: 1, color: "#55FFBB" },
        DOUBLE_OVAL_FRAME: { count: 1, color: "#FFBBBB" },
        FARM: { count: 1, color: "#BBBBBB" },
        FENCE: { count: 24, color: "#00BBBB" },
        FIRE: { count: 1, color: "#55BBBB" },
        FLORIDA_FRAME: { count: 1, color: "#FF00BB" },
        FLOWERS: { count: 12, color: "#BB00BB" },
        FOG: { count: 23, color: "#0000BB" },
        FRAMED: { count: 53, color: "#5500BB" },
        GRASS: { count: 142, color: "#FF55BB" },
        GUEST: { count: 22, color: "#BB55BB" },
        HALF_CIRCLE_FRAME: { count: 1, color: "#0055BB" },
        HALF_OVAL_FRAME: { count: 1, color: "#5555BB" },
        HILLS: { count: 18, color: "#FFFF00" },
        LAKE: { count: 143, color: "#BBFF00" },
        LAKES: { count: 0, color: "#00FF00" },
        LIGHTHOUSE: { count: 1, color: "#55FF00" },
        MILL: { count: 2, color: "#FFBB00" },
        MOON: { count: 3, color: "#BBBB00" },
        MOUNTAIN: { count: 160, color: "#00BB00" },
        MOUNTAINS: { count: 99, color: "#55BB00" },
        NIGHT: { count: 11, color: "#FF0000" },
        OCEAN: { count: 36, color: "#BB0000" },
        OVAL_FRAME: { count: 38, color: "#000000" },
        PALM_TREES: { count: 9, color: "#550000" },
        PATH: { count: 49, color: "#FF5500" },
        PERSON: { count: 1, color: "#BB5500" },
        PORTRAIT: { count: 3, color: "#005500" },
        RECTANGLE_3D_FRAME: { count: 1, color: "#555500" },
        RECTANGULAR_FRAME: { count: 1, color: "#FFFF55" },
        RIVER: { count: 126, color: "#BBFF55" },
        ROCKS: { count: 77, color: "#00FF55" },
        SEASHELL_FRAME: { count: 1, color: "#55FF55" },
        SNOW: { count: 75, color: "#FFBB55" },
        SNOWY_MOUNTAIN: { count: 109, color: "#BBBB55" },
        SPLIT_FRAME: { count: 1, color: "#00BB55" },
        STEVE_ROSS: { count: 11, color: "#55BB55" },
        STRUCTURE: { count: 85, color: "#FF0055" },
        SUN: { count: 40, color: "#BB0055" },
        TOMB_FRAME: { count: 1, color: "#000055" },
        TREE: { count: 361, color: "#550055" },
        TREES: { count: 337, color: "#FF5555" },
        TRIPLE_FRAME: { count: 1, color: "#BB5555" },
        WATERFALL: { count: 39, color: "#005555" },
        WAVES: { count: 34, color: "#555555" },
        WINDMILL: { count: 1, color: "#FFFF55" },
        WINDOW_FRAME: { count: 1, color: "#BBFF88" },
        WINTER: { count: 69, color: "#00FF88" },
        WOOD_FRAMED: { count: 1, color: "#55FF88" }
      },
      pixels: this.createPixels()
    };

    this.createPixels();
  }


  createPixels() {

    const pixels = [];

    for (let y = 0; y < HEIGHT; y++) {
      for (let x = 0; x < WIDTH; x++) {
        pixels.push({
          x,
          y,
          color: 'ERASE'
        })
      }
    }
    return pixels;
  }

  setSelectedColor(colorKey) {
    console.log("new selected color");
    this.setState({currentPaint: colorKey});
  }

  changeColor(colorKey, newValue) {
    let oldPaints = this.state.paints;
    oldPaints[colorKey]['color'] = newValue;
    this.setState({ paints: oldPaints });
  }

  updatePixel(pixelIndex) {
    if (this.unpaintable()) return false;

    let oldPixels = this.state.pixels;
    let oldPaints = this.state.paints;

    oldPaints = this.updateCounts(pixelIndex, oldPixels, oldPaints);
    oldPixels[pixelIndex].color = this.state.currentPaint;

    this.setState({pixels: oldPixels, paints: oldPaints});
  }

  unpaintable() {
    const thisPaint = this.state.paints[this.state.currentPaint];
    if (!thisPaint.currentCount) return false;
    return (thisPaint.currentCount >= thisPaint.count);
  }

  updateCounts(pixelIndex, oldPixels, oldPaints) {
    let oldColor = oldPixels[pixelIndex].color;
    if (!oldPaints[this.state.currentPaint].currentCount) {
      oldPaints[this.state.currentPaint].currentCount = 0;
    }
    oldPaints[oldColor].currentCount -= 1;
    oldPaints[this.state.currentPaint].currentCount += 1;

    return oldPaints;
  }

  render() {
    return (
      <div className="App">
        <Paper currentPaint={this.state.currentPaint} pixels={this.state.pixels} paints={this.state.paints} updatePixel={this.updatePixel.bind(this)} />

        <Palette paints={this.state.paints} changeColor={this.changeColor.bind(this)} setSelectedColor={this.setSelectedColor.bind(this)}/>
      </div>
    );
  }
}

export default App;
