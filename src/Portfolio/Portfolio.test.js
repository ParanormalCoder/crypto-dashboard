import React from 'react';
import {shallow} from 'enzyme';
import Portfolio from './Portfolio';

const getProps = () => ({
    loadPortfolio: () => Promise.resolve(
        [{
            "currencyId": "1", "totalQty": "23", "averagePrice": "11564.730000"
        }, {
            "currencyId": "52",
            "totalQty": "2333",
            "averagePrice": "0.310000"
        }]),
    mappedPrices: new Map([[1, {price:"1", name: 'abcd'}],[52, {price:"13", name: '3abcd'}]])
})


describe('Portfolio', () => {
    let component
    let props
    beforeEach(() => {
        props = getProps()
        component = shallow(<Portfolio {...props}/>);
    })

    it('renders without crashing', () => {
        expect(component).toBeTruthy()
    });

    it('renders with two currencies', () => {
        expect(component.find('.portfolio-list__currency')).toHaveLength(2)
    });
})

