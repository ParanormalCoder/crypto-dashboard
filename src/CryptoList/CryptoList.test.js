import React from 'react';
import {shallow} from 'enzyme';
import CryptoList from './CryptoList';

const getProps = () => ({
    list: [

        {
            "id": 2492,
            "name": "Elastos",
            "last_updated": "2019-08-07T18:23:08.000Z",
            "quote": {
                "USD": {
                    "price": 3.27944523709,
                    "volume_24h": 6686389.53851474,
                    "percent_change_1h": 3.0111,
                    "percent_change_24h": -0.15713,
                    "percent_change_7d": 3.64556,
                    "market_cap": 51878833.192420974,
                    "last_updated": "2019-08-07T18:23:08.000Z"
                }
            }
        },
        {
            "id": 3724,
            "name": "SOLVE",
            "last_updated": "2019-08-07T18:23:11.000Z",
            "quote": {
                "USD": {
                    "price": 0.149166233241,
                    "volume_24h": 2434626.83365492,
                    "percent_change_1h": 0.990149,
                    "percent_change_24h": -7.98988,
                    "percent_change_7d": -24.8043,
                    "market_cap": 48795863.48355172,
                    "last_updated": "2019-08-07T18:23:11.000Z"
                }
            }
        }
    ],
    handleBuy: jest.fn().mockImplementation(() => Promise.resolve(2))
})


describe('CryptoList', () => {
    let component
    let props
    beforeEach(() => {
        props = getProps()
        component = shallow(<CryptoList {...props}/>);
    })

    it('renders without crashing', () => {
        expect(component).toBeTruthy()
    });

    it('renders with two currencies', () => {
        expect(component.find('.crypto-list__currency')).toHaveLength(2)
    });

    it('should have all the buttons disabled initially', () => {
        expect(component.find('.crypto-list__currency Button').get(0).props.disabled).toBeTruthy()
        expect(component.find('.crypto-list__currency Button').get(1).props.disabled).toBeTruthy()
    });

    it('should have all the buttons enabled after having valid amounts entered', () => {
        component.instance().handleChange({
            target: {
                value: 11,
                name: 'Elastos'
            }
        })
        component.instance().handleChange({
            target: {
                value: 11,
                name: 'SOLVE'
            }
        })
        expect(component.find('.crypto-list__currency Button').get(0).props.disabled).toBeFalsy()
        expect(component.find('.crypto-list__currency Button').get(1).props.disabled).toBeFalsy()
    });
})

