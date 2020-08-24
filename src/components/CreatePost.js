import React from "react";

export default function CreatePost(props) {
  return (
    <div className="App-logo">
      <h1>Create a Post</h1>
      <form>
        <div className="flex-item">
          <label>Name:</label>
          <input
            type="text"
            name="userName"
            placeholder="Please enter your name"
            value={props.name}
            onChange={props.saveInput}
          />
        </div>
        <div className="flex-item">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Please enter your title"
            value={props.title}
            onChange={props.saveInput}
          />
        </div>
        <div className="flex-item">
          <label>Text:</label>
          <textarea
            name="content"
            rows="4"
            cols="50"
            placeholder="Please enter your message"
            value={props.content}
            onChange={props.saveInput}
          />
        </div>
        <button type="submit" className="flex-item" onClick={props.submitPost}>
          Create a post
        </button>
      </form>
    </div>
  );
}
