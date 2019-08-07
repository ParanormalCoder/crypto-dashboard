import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from "./Header/Header";

export default class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Header />

            <Route exact path='/' component={()=>(<div>HOME</div>)}></Route>
            <Route exact path='/portfolio' component={()=>(<div>Portfolio</div>)}></Route>
          </div>
        </Router>
    );
  }
}
