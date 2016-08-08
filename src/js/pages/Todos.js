import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor(){
    super();
    // TODO: omg really? so we all use this object!
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll()
    };
  }
  componentWillMount(){
    // new es6 arrow function automatically binds to this
    TodoStore.on( 'change', this.getTodos);
    // just to be sure
    console.log( "listener count (should be one)",
                  TodoStore.listenerCount( 'change'));
  }
  componentWillUnmount(){
    // prevent memory leak by removing the listener
    TodoStore.removeListener( 'change', this.getTodos);
  }
  getTodos(){
    this.setState({
      todos: TodoStore.getAll()
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
