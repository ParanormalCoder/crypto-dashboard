import PropTypes from 'prop-types';
import React from 'react';

import {Table} from 'reactstrap';

import './Portfolio.scss'

export default class Portfolio extends React.Component {
    state = { list: [] }

    renderList = () => this.state.list.map((currency, index) => (
        <tr className='portfolio-list__currency' key={currency.id}>
            <th>{index}</th>
            <td>{currency.name}</td>
            <td>{currency.value}</td>
            <td>{currency.qty}</td>
            <td>{currency.price}</td>
        </tr>)
    )

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
                        <th>Value</th>
                        <th>Price</th>
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
    loadPortfolio: PropTypes.func.isRequired
};

Portfolio.defaultProps = {};
