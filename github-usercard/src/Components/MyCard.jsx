import React, { Component } from "react";
import { Card }from '@material-ui/core';
import '../index.scss'
class MyCard extends Component {
  componentDidMount() {

    
  }

  render() {
    return (
      <Card className='root'>
        <h3 className="name">{this.props.userData.name}</h3>
        <img className = '' src={this.props.userData.avatar_url} alt="" />
        <div className="card-info"></div>

        <p className=''>
          <b>UserName:</b> {this.props.userData.login}
        </p>
        <p>
          <b>Location:</b> {this.props.userData.location}
        </p>
        <p>
          <b>Profile:</b> {this.props.userData.name} <a>{this.props.userData.html_url}</a>
        </p>
        <p>
          <b>Followers:</b> {this.props.userData.followers}
        </p>
        <p>
          <b>Following:</b> {this.props.userData.following}
        </p>
        <p><b>Bio:</b> {this.props.userData.bio}</p>
      </Card>
    );
  }

};

export default MyCard;
