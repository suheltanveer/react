import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'

class App extends Component {

  render() {
    return (
      <div>
        <UserInfo user={this.props.user} createNewUserId={this.props.actions.createNewUserId} />
        <br />
        <br />
        <h1>Todos:</h1>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList todos={this.props.todos} actions={this.props.actions} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
