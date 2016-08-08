import dispatcher from "../dispatcher";
import axios from "axios";

export function createTodo( text){
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function deleteTodo( id){
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  });
}

export function reloadTodos(){
  dispatcher.dispatch( { type: "FETCH_TODOS"});
  // lol "or use jquery ajax if you're *still* using that"
  axios( "/api/todo")
  .then( (response) => {
    console.log( "get the data", response.data);
    dispatcher.dispatch( {type: "RECEIVE_TODOS", todos: response.data});
  })
  .catch( (err) => {
    console.error( "todo fetch failed:", err);
  });
}
