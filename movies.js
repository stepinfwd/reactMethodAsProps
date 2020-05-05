import React, { Component } from "react";
import Child from "./child";
export default class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "stepinfwd"
    };
  }

  handle = newname => {
    console.log(newname);
    this.setState({
      name: newname
    });
  };
  render() {
    return (
      <div>
        <p>hello my name is {this.state.name}</p>
        <Child name={this.state.name} handleNameChange={this.handle} />
      </div>
    );
  }
}
