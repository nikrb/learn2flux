import React from "react";

export default class TextEntry extends React.Component {
  constructor(){
    super();
    this.state = {newTodoText : ""};
  }
  render(){
    return (
      <div>
        <button onClick={this.props.buttonClick.bind(this)}>
          New Todo:
        </button>
        <input value={this.props.newTodoText} onChange={this.props.textChange.bind(this)} />
      </div>
    );
  }
}
