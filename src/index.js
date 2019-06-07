import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Todo = props => (
  <li class="todo-container">
    <input
      type="checkbox"
      class="todo-checkbox"
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <span class="todo-text">{props.todo.text}</span>
    <button onClick={props.onDelete} class="todo-delete">
      delete
    </button>
  </li>
);

let id = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addToDo() {
    const text = prompt("Please add your TODO");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <div class="container center">
        <h1 class="center title">My TODO App</h1>
        <div class="flow-right controls">
          <span>
            Item count: <span id="item-count">{this.state.todos.length}</span>
          </span>
          <span>
            Unchecked count:{" "}
            <span id="unchecked-count">{this.state.todos.filter(todo => !todo.checked).length}</span>
          </span>
        </div>
        <button class="button center" onClick={() => this.addToDo()}>
          Add TODO
        </button>
        <ul id="todo-list" class="todo-list">
          {this.state.todos.map(todo => (
            <Todo
              onDelete={() => this.removeTodo(todo.id)}
              onToggle={() => this.toggleTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
