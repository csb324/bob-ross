// @flow 
import React, { Component } from 'react';

type PixelProps = {
  x: number,
  y: number,
  selectedColor: number
};

type PixelState = {
  isFilled: boolean,
  filledColor: number
};

class Pixel extends Component<PixelProps, PixelState> {

  props: PixelProps;

  render() {
    return (
      <a className="Pixel" href="#">
      </a>
    );
  }
}


// export const Pixel = (props: PixelProps) => (
//   <div className={styles.header}>
//     {props.buttons.map((b, i) => (
//       <Button {...b} key={b.icon} />
//     ))}
//     {props.children}

//     <h3 className={styles.listHeader}>{props.sectionName}</h3>
//   </div>
// );

// Header.defaultProps = {
//   buttons: [],
//   sectionName: ''
// };

// export default Header;

export default Pixel;