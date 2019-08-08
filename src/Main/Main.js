import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import {Container} from "reactstrap";

import CryptoList from "../CryptoList/CryptoList";
import Portfolio from "../Portfolio/Portfolio";
import PriceService from "../Common/PriceService"
import PortfolioService from "../Common/PortfolioService"

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
        const mappedPrices = new Map()
        this.state.priceList.forEach(currency => {
            mappedPrices.set(currency.id, currency)
        })

        return (
            <Container>
                <Router>
                    <Route exact path='/' component={() => (
                        <CryptoList list={this.state.priceList} handleBuy={PortfolioService.buy}/>)}/>
                    <Route exact path='/portfolio' component={() => (
                        <Portfolio loadPortfolio={PortfolioService.getList} mappedPrices={mappedPrices}/>)}/>
                </Router>
            </Container>
        );
    }
}
