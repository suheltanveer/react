import React, {Component} from 'react'

class TextDisplay extends Component {

  handleClick() {
    this.props.deleteLetter()
  }

  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <button onClick={this.handleClick.bind(this)}>delete char</button>
      </div>
    )
  }
}

export default TextDisplay
