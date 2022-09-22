import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <ol>
        { this.props.tasks.map((task,index)=><li key={index}>{task}</li>) }
      </ol>
    );
  }
}