import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      backgroundColor: "white"
    };
  };

  render() {
    // Save props for easier access
    const { id, title } = this.props.todo;

    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              aria-label="Checkbox for toggling complete"
              defaultChecked={this.props.todo.completed}
              onChange={this.props.toggleComplete.bind(this, id)}
            />
          </div>
        </div>
        {/* Display the todo in an input form because Bootstrap ¯\_(ツ)_/¯ */}
        <input
          type="text"
          className="form-control todo-text"
          value={title}
          style={this.getStyle()}
          disabled
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={this.props.delTodo.bind(this, id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
