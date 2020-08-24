import React, { Component } from "react";

export default class ShowPosts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-logo">
        <h1>Show the Posts</h1>
        {this.props.posts.map((item) => (
          <div>
            <h2>{item.id}</h2>
            <h2>{item.userName}</h2>
            <h2>{item.title}</h2>
            <h2>{item.text}</h2>
            <h2>{item.time}</h2>
          </div>
        ))}
      </div>
    );
  }
}
