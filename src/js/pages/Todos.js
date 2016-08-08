import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: TodoStore.getAll()
    };
  }
  componentWillMount(){
    // new es6 arrow function automatically binds to this
    TodoStore.on( 'change', () => {
      this.setState({
        todos: TodoStore.getAll()
      });
    });
  }
  createTodo(){
    // TODO: add an input field and grab the text
    TodoActions.createTodo( Date.now());
  }
  reloadTodos(){
    TodoActions.reloadTodos();
  }
  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>
          Reload
        </button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
