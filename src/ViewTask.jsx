import React, { Component } from "react";
import AddTask from "./AddTask";
import App from "./App";
import NormalView from "./NormalView";
import EditView from "./EditView";

class ViewTask extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var renderViewTask;
    if (this.props.newTask.length === 0) {
      renderViewTask = (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">View To-Do list</h4>
            <p className="card-text">Welcome to a Very Simple To-Do App!</p>
            <p className="card-text">Get started now by adding a new to-do on the left.</p>
          </div>
        </div>
      )
    } else {
      renderViewTask = (
        this.props.newTask.map((item, index) => {
          if (item.isBeingEdited === true) {
            return (
              <EditView
                key={index}
                id={item.id}
                description={item.description}
                className={item.priority}
                handleSaveTask={this.props.handleSaveTask}
              />
            )
          } else {
            return (
              <NormalView
                key={index}
                id={item.id}
                description={item.description}
                priority={item.priority}
                deleteTask={this.props.deleteTask}
                handleEditTask={this.props.handleEditTask}
                isBeingEdited={this.props.isBeingEdited}
              />
            )
          }
        }))
    }
    return (
      <div>
        <ul className="col-md-6">
          {renderViewTask}
        </ul>
      </div>
    );
  }
}
export default ViewTask;