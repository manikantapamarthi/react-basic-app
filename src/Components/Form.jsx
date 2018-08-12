import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="">
        <label >
          Name:
          <input type="text" name="name"/>
        </label>
        <label>
          Description:
          <input type="text" name="desc"/>
        </label>
        <input type="submit" value="submit"/>
      </form>
    )
  }
}

export default Form;