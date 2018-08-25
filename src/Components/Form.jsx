import React, { Component } from 'react';
import axios from "axios";

class Form extends Component {
  state = {
      name: "",
      desc: "",
  }

  handleSubmit = (e) =>  {
    e.preventDefault();
    axios.post("http://localhost:3001/posts",
      {
        name:  this.state.name,
        desc: this.state.desc
      }
    ).then((response)  => {
      if(response.status) {
        window.location.href = "/posts"
      }
    })
  }
  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <label >
          Name:
          <input type="text" name="post[name]" value={this.state.name} onChange={(e)=>{this.setState({name: e.target.value})}}/>
        </label>
        <label>
          Description:
          <input type="text" name="post[desc]" value={this.state.desc}onChange={(e)=>{this.setState({desc: e.target.value})}}/>
        </label>
        <input type="submit" value="submit"/>
      </form>
    )
  }
}

export default Form;