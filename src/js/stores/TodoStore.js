import { EventEmitter} from 'events';

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor(){
    super();
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete : false
      },
      {
        id:235684679,
        text: "Pay Bills",
        complete: false
      }
    ];
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
window.dispatcher = dispatcher;
export default todoStore;
