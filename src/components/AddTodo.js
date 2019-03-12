import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    // Stop page from sending request to itself and reloading
    e.preventDefault();

    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Add Todo..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <div className="input-group-append">
            <input type="submit" value="Submit" className="btn btn-success" />
          </div>
        </div>
      </form>
    );
  }
}

export default AddTodo;
