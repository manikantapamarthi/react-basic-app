import React, { Component } from 'react';
import axios from "axios";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/posts")
          .then( response => {
            this.setState({posts: response.data})
          })
  }

  editPost(post) {
    
  }

  deletePost(post) {
    axios.delete(`http://localhost:3001/posts/${post}`)
         .then(response => {
                if(response.status) {
                  window.location.reload();
              }
    })
  }

  
  render(){
    return(
      <div>
        {this.state.posts.map((p, index) => {
            return(
              <ul key={'post' + index}>
                <li>{p.id}</li>
                <li>{p.name}</li>
                <li>{p.desc}</li>
                <button onClick={() => this.deletePost(`${p.id}`)}>Delete</button>
                <button onClick={() => this.editPost(p)}>Edit</button>
              </ul>  
            )
          }
          )}
      </div>
    )
  }
}

export default Posts;