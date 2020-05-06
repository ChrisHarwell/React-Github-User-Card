import React from "react";
import axios from "axios";

const Card = (props) => {
  return (
    <>
      <h3 className="name">{props.name}</h3>
      <img src={props.avatar_url} alt="" />
      <div className="card-info"></div>

      <p className="username">
        <b>UserName:</b> {props.login}
      </p>
      <p>
        <b>Location:</b> {props.location}
      </p>
      <p>
        <b>Profile:</b> {props.name} <a>{props.html_url}</a>
      </p>
      <p>
        <b>Followers:</b> {props.followers}
      </p>
      <p>
        <b>Following:</b> {props.following}
      </p>
      <p><b>Bio:</b> {props.bio}</p>
    </>
  );
};

export default Card;
