import React, { Component } from "react";
import "./FirstRow.css";

class FirstRow extends Component {
  render() {
    return( 
      <div 
        className="firstbtn"onClick={() => this.props.handleClick(this.props.children)}>
        {this.props.children}
      </div>
    )
  }
}

export default FirstRow;
