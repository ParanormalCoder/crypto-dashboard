import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import {Container} from "reactstrap";

import './Main.scss'

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <Route exact path='/' component={() => (<div>HOME</div>)}/>
                    <Route exact path='/portfolio' component={() => (<div>Portfolio</div>)}/>
                </Router>
            </Container>
        );
    }
}
