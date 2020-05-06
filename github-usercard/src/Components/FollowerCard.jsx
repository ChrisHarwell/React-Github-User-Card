import React, { Component } from "react";
import { Card } from "@material-ui/core";

class FollowerCard extends Component {
  render() {
    return (
      <Card>
        {this.props.followerData.map((follower) => (
            <>
              <h3 className="name">{follower.login}</h3>
              <img src={follower.avatar_url} alt="" />
              <div className="card-info"></div>
              <p className="username">
                <b>UserName:</b> {follower.login}
              </p>
              <p>
                <b>Profile:</b> {follower.name}
                <a>{follower.html_url}</a>
              </p>
            </>
        ))}
      </Card>
    );
  }
}

export default FollowerCard;
