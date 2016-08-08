import { EventEmitter} from 'events';

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor(){
    super();
    this.todos = [];
  }
  createTodo( text){
    const id = Date.now();
    this.todos.push( {
      id : id,
      text,
      complete: false
    });
    this.emit( "change");
  }
  getAll(){
    return this.todos;
  }

  handleActions( action){
    // TODO: new syntax for switch? no break using {}
    switch( action.type){
      case "CREATE_TODO":{
        this.createTodo( action.text);
      }
      case "RECEIVE_TODOS":{
        this.todos = action.todos;
        this.emit("change");
      }
    }
  }
}

const todoStore = new TodoStore;
dispatcher.register( todoStore.handleActions.bind(todoStore));
export default todoStore;
