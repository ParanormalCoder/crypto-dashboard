import PropTypes from 'prop-types';
import React from 'react';

import {Table, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

import './CryptoList.scss'
import Utils from "../Common/Utils";

export default class CryptoList extends React.Component {
    state = { order: {} }

    handleBuy = (currencySlug) => {
        this.props.handleBuy(currencySlug, this.state.order[currencySlug]).then(
            () => {
                this.setState(state => ({
                    order: {
                        ...state.order,
                        [currencySlug]: 0
                    }
                }))
            }
        )
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState(state => ({
            order: {
                ...state.order,
                [name]: value
            }
        }))
    }

    isInputDisabled = currencySlug => {
        return !(this.state.order[currencySlug] && this.state.order[currencySlug] > 0)
    }

    renderList = () => this.props.list.map((currency, index) => (
        <tr className='crypto-list__currency' key={currency.id}>
            <th>{index}</th>
            <td>{currency.name}</td>
            <td>{currency.updatedAt}</td>
            <td>{Utils.getFormattedPrice(currency.price)}</td>
            <td><InputGroup>
                <Input type='number' name={currency.slug} value={this.state.order[currency.slug]}
                       onChange={this.handleChange}
                       defaultValue={0.0}/>
                <InputGroupAddon addonType="prepend">
                    <Button disabled={this.isInputDisabled(currency.slug)}
                            onClick={() => this.handleBuy(currency.slug)}>Buy</Button>
                </InputGroupAddon>
            </InputGroup></td>
        </tr>)
    )

    render() {
        return (
            <div className='crypto-list'>
                <Table dark>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Currency name</th>
                        <th>Last updated</th>
                        <th>Price per unit</th>
                        <th>Trading Actions</th>
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

CryptoList.propTypes = {
    list: PropTypes.array,
    handleBuy: PropTypes.func.isRequired
};

CryptoList.defaultProps = {
    list: []
};
