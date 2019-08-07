import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {Container} from "reactstrap";

import Header from "./Header/Header";

export default class App extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <div>
                        <Header/>

                        <Route exact path='/' component={() => (<div>HOME</div>)}/>
                        <Route exact path='/portfolio' component={() => (<div>Portfolio</div>)}/>
                    </div>
                </Router>
            </Container>
        );
    }
}
