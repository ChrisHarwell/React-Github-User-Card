import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/MyCard";
import MyCard from "./Components/MyCard";
import FollowerCard from "./Components/FollowerCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followerData: [], // setting this to an array so we can map over it
    };
  }

  componentDidMount() {
    axios
        .get('https://api.github.com/users/ChrisHarwell')
        .then(res => {
          this.setState({userData: res.data})
        })
        .catch(err => {
          console.err('An error occurred ', err);
        })

        axios
        .get('https://api.github.com/users/ChrisHarwell/followers')
        .then(res => {
          this.setState({followerData: res.data})
        })
        .catch(err => {
          console.err('An error occurred ', err);
        })
    
  }

  render() {
    return (
      <div className="App">
        <MyCard userData={this.state.userData}/>
        <FollowerCard followerData={this.state.followerData} />
      </div>
    );
  }
}
export default App;
