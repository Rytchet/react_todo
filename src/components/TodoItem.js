import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={this.props.toggleComplete.bind(this, id)}
        />
        <div style={this.getStyle()}>{title}</div>
        <button
          onClick={this.props.delTodo.bind(this, id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
