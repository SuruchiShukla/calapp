import React, { Component } from "react";
import "./LastRow.css";

class LastRow extends Component {
  render() {
    return( 
      <div 
        className="lstbtn"
        onClick={() => this.props.handleClick(this.props.children)}>
        {this.props.children}
      </div>
    )
  }
}

export default LastRow;
