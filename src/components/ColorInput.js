import React from 'react'
import { SketchPicker } from 'react-color'

class ColorInput extends React.Component {

  constructor(props) {
    super();
    this.state = {
      displayColorPicker: false,
      color: props.color
    };
  }

  props: {
    color: string,
    updateColor: (string) => void
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.hex })
  };

  handleChangeComplete = (color, event) => {
    this.setState({ color: color.hex });
    this.props.updateColor(color.hex);
  };

  render() {
    

    return (
      <div className="color-input">
        <div className="color-input__edit" onClick={this.handleClick}>
          Edit
        </div>
        {this.state.displayColorPicker ? <div className="color-input__popover">
          <div className="color-input__cover" onClick={this.handleClose} />
          <SketchPicker color={this.state.color} onChange={this.handleChange} onChangeComplete={this.handleChangeComplete}/>
        </div> : null}

      </div>
    )
  }
}

export default ColorInput