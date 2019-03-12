import React, { Component } from "react";

export class AddTodo extends Component {
  render() {
    return (
      <form>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Add Todo..."
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
