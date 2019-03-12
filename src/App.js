import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import axios from "axios";
import uuid from "uuid";

import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  // This function runs immidiately after the App component is mounted
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => {
        this.setState({
          todos: res.data.map(todo => {
            // Use uuid instead of the server response id to be consistent
            // with own added todos
            todo.id = uuid.v4();
            return todo;
          })
        });
      });
  }

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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => {
        // It has to use uuid instead of the server response because it's
        // always the same, and it breaks the delete / toogleComplete and
        // gives errors in React. With a real server it wouldn't have to do
        // that because all id's would be unique
        res.data.id = uuid.v4();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  render() {
    return (
      <Router>
        <div className="App container">
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  toggleComplete={this.toggleComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
