import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner",
        completed: false
      },
      {
        id: 3,
        title: "Meeting",
        completed: false
      }
    ]
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className="App container">
        <Header />
        <Todos
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          delTodo={this.delTodo}
        />
        <AddTodo />
      </div>
    );
  }
}

export default App;
