import React, { Component } from 'react';
import PaintSwatch from './PaintSwatch';

class Palette extends Component {

  props: {
    paints: { 
      [string]: {
        count: number,
        currentCount: number,
        color: string
      } 
    },
    changeColor: (string, string) => void,
    setSelectedColor: (string) => void
  }

  showPaintSwatches() {    
    const names = Object.keys(this.props.paints);
    const {setSelectedColor, changeColor, paints} = this.props;

    const namesSorted = names.sort((a, b) => {
      return (paints[a].count >= paints[b].count);
    }).reverse();

    return namesSorted.map((n) => {

      const selectThisColor = () => {
        setSelectedColor(n);
      }
      const changeThisColor = (newColor: string) => {
        changeColor(n, newColor);
      }

      return (
        <PaintSwatch key={n} dataPoint={n} changeColor={changeThisColor} selectColor={selectThisColor} {...paints[n]} />
      )

    })
  }

  render() {
    return (
      <div className="palette">
        {this.showPaintSwatches()}
      </div>
    );
  }
}


export default Palette;