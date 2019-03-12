import React, { Component } from "react";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Dinner",
        completed: false
      },
      {
        id: uuid.v4(),
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

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
