import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Nav from "./Components/Navigation.jsx"
import Form from "./Components/Form.jsx"
import Posts from "./Components/Posts.jsx";
import Home from "./Components/Home.jsx"

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/post/new' component={Form}/>
          <Route exact path='/posts' component={Posts}/>
        </Switch>
      </div>
    );
  }
}

export default App;
