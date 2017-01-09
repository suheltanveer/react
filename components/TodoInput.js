import React, {Component} from 'react'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault()


    if ( this.state.inputText !== '' ) {
        this.props.addTodo(this.state.inputText)
        this.setState({
          inputText: ''
        })
    } else {
      alert('enter a todo item')
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            placeholder="Type in your todo"
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
          />
          {/* {errorMessage} */}
          <input
            type="submit"
          />
        </form>
      </div>
    )
  }
}

export default TodoInput
