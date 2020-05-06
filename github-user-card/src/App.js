import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avatar: "",
      userName: "",
      location: "",
      name: "",
      profileURL: "",
      followers: "",
      following: "",
      bio: "",
      follower_avatar: "",
      follower_userName: "",
      follower_location: "",
      follower_name: "",
      follower_profileURL: "",
      follower_followers: "",
      follower_following: "",
    };
  }
  getFollowers() {
    axios
      .get(`https://api.github.com/users/ChrisHarwell/followers`)
      .then((res) => {
        console.log(res.data);
          this.setState({
            follower_avatar: res.data.avatar_url,
            follower_userName: res.data.login,
            follower_name: res.data.login,
            follower_profileURL: res.data.html_url,
          });
        })
      .catch((err) => console.error(err));
  }

  getProfile() {
    axios
      .get(`https://api.github.com/users/ChrisHarwell`)
      .then((res) => {
        console.log(res.data.login);

        this.setState({
          avatar: res.data.avatar_url,
          userName: res.data.login,
          location: res.data.location,
          name: res.data.name,
          profileURL: res.data.html_url,
          followers: res.data.followers,
          following: res.data.following,
          bio: res.data.bio,
        });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    console.log("CDM Invoked");
    this.getProfile();
    this.getFollowers();

    this.map(data => {
      return(
        <Card
        avatar_url={data.follower_avatar}
        login={data.follower_userName}
        location={data.follower_location}
        name={data.follower_name}
        profileURL={data.follower_profileURL}
        followers={data.follower_followers}
        following={data.follower_following}
      />
      )

    })
  }
  render() {
    return (
      <div className="App">
        <Card
          avatar_url={this.state.avatar}
          login={this.state.userName}
          location={this.state.location}
          name={this.state.name}
          profileURL={this.state.profileURL}
          followers={this.state.followers}
          following={this.state.following}
          bio={this.state.bio}
        />

      </div>
    );
  }
}

export default App;
