import React from 'react';
import {shallow} from 'enzyme';
import Portfolio from './Portfolio';

const getProps = () => ({
    loadPortfolio: () => Promise.resolve(
        [{
            "id": 2492,
            "name": "Elastos01",
            "value": 3.27944523709,
            "price": 3.27944523709,
            "qty": 32,
        },
            {
                "id": 2492,
                "name": "Elastos02",
                "value": 3.27944523709,
                "price": 3.27944523709,
                "qty": 32,
            }
        ])
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

