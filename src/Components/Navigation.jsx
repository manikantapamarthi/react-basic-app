import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/post/new"}>New Post</Link></li>
        <li><Link to={"/posts"}>Posts</Link></li>
      </ul>
    )
  }
}
export default Nav;