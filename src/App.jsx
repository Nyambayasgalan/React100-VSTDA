import React, { Component } from "react";
import AddTask from "./AddTask";
import ViewTask from "./ViewTask";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " ",
      priority: " ",
      newTask: [],
      isBeingEdited: false,
    };
    this.handleText = this.handleText.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleSaveTask = this.handleSaveTask.bind(this);
    this.updatePriority = this.updatePriority.bind(this);
  }

  handleText(event) {
    this.setState({ text: event.target.value });
    console.log("Textarea!")
  }

  handlePriority(event) {
    this.setState({ priority: event.target.value });
    console.log("Priority")
  }

  // Add To-Do
  handleAddButton(e) {
    let listItem = {
      id: 1 + Math.random(),
      description: this.state.text,
      priority: this.state.priority,
      isBeingEdited: false
    }
    this.state.newTask.push(listItem)
    e.preventDefault();
    this.setState({ newTask: this.state.newTask, text: " ", priority: " " });
    document.getElementById("textarea").value = " ";
    document.getElementById("priority").value = "selectPlaceHolder";
    console.log(this.state.newTask)
  }

  // Delete To-Do
  handleDeleteTask(id) {
    console.log("this is the selected id:", id)
    console.log("this is the complete array:", this.state.newTask)
    let deleteTask = this.state.newTask.filter((listItem) => {
      console.log("listItem", listItem)
      if (listItem.id !== id) {
        return listItem;
      }
    });
    this.setState({
      newTask: deleteTask
    })
  };

  // Edit To-Do
  handleEditTask(id) {
    console.log(id)
    let temporaryList = this.state.newTask
    temporaryList.forEach((item) => {
      if (id == item.id) {
        item.isBeingEdited = true;
      }
      this.setState({
        newTask: temporaryList
      })
    })
    console.log(this.state.newTask)
  }

  // Save edited to-do
  handleSaveTask(id, text, priority) {
    console.log(id, text, priority);
    let temporaryList = this.state.newTask;
    temporaryList.forEach((item) => {
      console.log(`item: `, item);
      if (id == item.id) {
        item.description = text;
        item.priority = priority;
        item.isBeingEdited = false;
      }
    })
    this.setState({
      newTask: temporaryList
    })
    console.log(this.state.newTask);
  }

  // Update priority
  updatePriority(event) {
    console.log(event.target)
    this.setState({
      priority: event.target.value,
    })
  }

  render() {
    return (

      <div className="container">
        <h1>Very Simple To Do App</h1>
        <p>Track all of the things</p>
        <hr></hr>
        <div className="row">
          <AddTask
            handleText={this.handleText}
            handlePriority={this.handlePriority}
            handleAddButton={this.handleAddButton}
            updatePriority={this.updatePriority}
          />
          <ViewTask
            deleteTask={this.handleDeleteTask}
            newTask={this.state.newTask}
            handleEditTask={this.handleEditTask}
            isBeingEdited={this.state.isBeingEdited}
            handleSaveTask={this.handleSaveTask}
          />
        </div>
      </div>
    );
  }
}
export default App;

