import PropTypes from 'prop-types';
import React from 'react';

import {Table} from 'reactstrap';

import './Portfolio.scss'
import Utils from "../Common/Utils";

export default class Portfolio extends React.Component {
    state = { list: [] }

    renderList = () => {
        if(!(this.props.mappedPrices.size && this.state.list)) {
            return null
        }

        return this.state.list.map((currency, index) => {
            const {name, price} = this.props.mappedPrices.get(parseInt(currency.currencyId))
            return (<tr className='portfolio-list__currency' key={currency.currencyId}>
                <th>{index}</th>
                <td>{name}</td>
                <td>{currency.totalQty}</td>
                <td>{Utils.getFormattedPrice(currency.totalPrice)}</td>
                <td>{Utils.getFormattedPrice(price)}</td>
            </tr>)
        })
    }

    async componentDidMount() {
        const list = await this.props.loadPortfolio();
        this.setState({ list })
    }

    render() {
        return (
            <div className='portfolio-list'>
                <Table dark>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Currency name</th>
                        <th>Quantity</th>
                        <th>Total Value</th>
                        <th>Current Unit Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderList()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

Portfolio.propTypes = {
    mappedPrices: PropTypes.any,
    loadPortfolio: PropTypes.func.isRequired
};

Portfolio.defaultProps = {
    mappedPrices: new Map()
};
