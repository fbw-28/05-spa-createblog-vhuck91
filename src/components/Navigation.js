import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className="App-header">
        <li className="App-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="App-link">
          <NavLink to="/create-post">New Post</NavLink>
        </li>
        <li className="App-link">
          <NavLink to="/show-posts">Current Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
