import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        This is the Content2
        <h2>:::::{this.props.headerPros}</h2>
        <h3>{this.props.contentPros}</h3>
      </div>
    );
  }
}

export default Content;
