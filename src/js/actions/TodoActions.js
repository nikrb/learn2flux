import dispatcher from "../dispatcher";

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
  /* TODO: *finally* hook up to mongo via api
  // lol "or use jquery ajax if you're *still* using that"
  axios( "/api/todos")
  .then( (data) => {
    console.log( "get the data", data);
  });
  */
  dispatcher.dispatch( { type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({ type: "RECEIVE_TODOS", todos: [
        {
          id: 113464613,
          text: "Go Shopping Again",
          complete : false
        },
        {
          id:235684679,
          text: "Hug the wife",
          complete: true
        }
    ]});
  }, 1000);
}

/* es5
export default {
  createTodo : function(){

  }
}
*/
