import React from 'react';

import Todo from '../Todo';

export default class TodoList extends React.Component {
  render(){
    const {todos} = this.props;
    console.log( "@TodoList.render");

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo._id} {...todo}/>;
    });
    return (
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
