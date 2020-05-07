import React, { Component } from "react";
import { Card } from "@material-ui/core";
import './css/MyCards.min.css'

class FollowerCard extends Component {
  render() {
    return (
      <Card className='root'>
        {this.props.followerData.map((follower) => (
            <div>
              <h3 className="name">{follower.login}</h3>
              <img className='profile-pic' src={follower.avatar_url} alt="" />
              <div className="user-info">
              <p className="username">
                <b>UserName:</b> {follower.login}
              </p>
              <p>
                <b>Profile:</b> {follower.name}
                <a>{follower.html_url}</a>
              </p>
              </div>
            </div>
        ))}
      </Card>
    );
  }
}

export default FollowerCard;
