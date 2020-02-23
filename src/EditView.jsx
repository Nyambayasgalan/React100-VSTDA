import React, { Component } from "react";

class EditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " ",
      priority: 0,
    }
    this.handleText = this.handleText.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
  }

  handleText(event) {
    this.setState({ text: event.target.value });
    console.log("Textarea!")
  }

  handlePriority(event) {
    this.setState({ priority: event.target.value });
    console.log("Priority!")
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <textarea
            className="update-todo update-todo-text"
            placeholder="Enter task"
            id="textarea"
            value={this.state.text}
            onChange={this.handleText}>
          </textarea>
          <h4>How much of a priority is this?</h4>
          <select
            id="priority"
            className="form-control create-todo-priority"
            placeholder='Select a Priority'
            onChange={this.handlePriority}
            value={this.state.priority}>
            <option>Select a Priority </option>
            <option value="1" className="alert alert-success">Low Priority</option>
            <option value="2" className="alert alert-warning">Medium Priority</option>
            <option value="3" className="alert alert-danger">High Priority</option>
          </select>
          <button
            onClick={() => this.props.handleSaveTask(this.props.id, this.state.text, this.state.priority)}
            className="btn btn-success btn-block"
          >Save</button>
        </li>
      </ul>
    );
  }
}
export default EditView;



