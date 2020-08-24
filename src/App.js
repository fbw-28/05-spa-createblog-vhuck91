import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./App.css";

import Navigation from "./components/Navigation";
import WelcomePage from "./components/WelcomePage";
import CreatePost from "./components/CreatePost";
import ShowPosts from "./components/ShowPosts";
import NotFound from "./components/NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Userame: "",
      title: "",
      content: "",
      allPosts: [],
    };
  }

  saveInputToState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitPost = (e) => {
    e.preventDefault();
    const { userName, title, content } = this.state;

    let post = {
      id: uuid(),
      time: new Date().toLocaleString(),
      userName,
      title,
      content,
    };
    this.setState({
      allPosts: [post, ...this.state.allPosts],
      userName: "",
      title: "",
      content: "",
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route
              path="/create-post"
              render={(props) => (
                <CreatePost
                  {...props}
                  name={this.state.userName}
                  title={this.state.title}
                  content={this.state.content}
                  time={this.state.time}
                  saveInput={this.saveInputToState}
                  submitPost={this.submitPost}
                />
              )}
            />
            <Route
              path="/show-posts"
              render={(props) => (
                <ShowPosts {...props} posts={this.state.allPosts} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
