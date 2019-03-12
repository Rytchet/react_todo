import React, { Component } from "react";

export class AddTodo extends Component {
  render() {
    return (
      <li className="list-group-item">
        <form>
          <div className="input-group">
            <input
              className="form-control mr-2"
              type="text"
              name="title"
              placeholder="Add Todo..."
            />

            <span className="input-group-btn">
              <input type="submit" value="Submit" class="btn btn-success" />
            </span>
          </div>
        </form>
      </li>
    );
  }
}

export default AddTodo;
