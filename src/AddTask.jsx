import React, { Component } from "react";

class AddTask extends Component {

  render() {
    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-body .bg-success">
            <h4 className="card-title">Add New To-Do</h4>
            <label className="card-text">I want to...</label>
            <textarea placeholder="Enter task"
              id="textarea"
              className="create-todo-text"
              value={this.props.text}
              onChange={this.props.handleText}>
            </textarea>
            <h4>How much of a priority is this?</h4>
            <select
              id="priority"
              className="form-control create-todo-priority"
              placeholder="Select a Priority"
              onChange={this.props.updatePriority}
              value={this.props.priority}>
              <option
                value="selectPlaceHolder"
                className="alert">
                Select a Priority
              </option>
              <option value="1" className="alert alert-success">Low Priority</option>
              <option value="2" className="alert alert-warning">Medium Priority</option>
              <option value="3" className="alert alert-danger">High Priority</option>
            </select>
            <button
              onClick={this.props.handleAddButton}
              className="btn btn-primary btn-block create-todo"
            >Add item</button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddTask;

