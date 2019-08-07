import PropTypes from 'prop-types';
import React from 'react';

import {Table, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

import './CryptoList.scss'

export default class CryptoList extends React.Component {
    state = { order: {} }

    handleBuy = (currencyName) => {
        this.props.handleBuy(currencyName, this.state.order[currencyName]).then(
            () => {
                this.setState({ order: {} })
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

    isInputDisabled = currencyName => {
        return !(this.state.order[currencyName] && this.state.order[currencyName] > 0)
    }

    renderList = () => this.props.list.map((currency, index) => (<tr className='crypto-list__currency' key={currency.id}>
            <th>{index}</th>
            <td>{currency.name}</td>
            <td>{currency.last_updated}</td>
            <td>{currency.quote.USD.price.toFixed(2)}</td>
            <td><InputGroup>
                <Input type='number' name={currency.name} value={this.state.order[currency.name]}
                       onChange={this.handleChange}
                       defaultValue={0.0}/>
                <InputGroupAddon addonType="prepend">
                    <Button disabled={this.isInputDisabled(currency.name)}
                            onClick={this.handleBuy}>Buy</Button>
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
