import React, { Component } from "react";

class NormalView extends Component {
  constructor(props) {
    super(props);
  }

  // Used concatenation to merge 2 different strings for changing priority color
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item list-group-item-primary" key={this.props.id}>
          <div className={"list-group-item list-group-item-info class-" + this.props.priority}>{this.props.description}
          
          <div className='btn-group'>
          <button className="btn">
          <i className="glyphicon glyphicon-trash "
           onClick={() => this.props.deleteTask(this.props.id)}></i></button>
          

          <button className="btn">
          <i className="glyphicon glyphicon-pencil"
            onClick={() => this.props.handleEditTask(this.props.id)}></i></button>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}
export default NormalView;

