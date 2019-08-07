import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import {Container} from "reactstrap";

import CryptoList from "../CryptoList/CryptoList";
import PriceService from "../Common/PriceService"

import './Main.scss'

const INTERVAL_TERM = 30000

export default class Main extends Component {
    state = {
        priceList: []
    }

    interval = null

    setPriceList = async () => {
        const priceList = await PriceService.getPriceList()
        this.setState({ priceList })
    }

    async componentDidMount() {
        await this.setPriceList()
        this.interval = setInterval(async () => {
            await this.setPriceList()
        }, INTERVAL_TERM)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        this.interval = null
    }

    render() {
        return (
            <Container>
                <Router>
                    <Route exact path='/' component={() => (
                        <CryptoList list={this.state.priceList} handleBuy={() => Promise.resolve()}/>)}/>
                    <Route exact path='/portfolio' component={() => (<div>Portfolio</div>)}/>
                </Router>
            </Container>
        );
    }
}
