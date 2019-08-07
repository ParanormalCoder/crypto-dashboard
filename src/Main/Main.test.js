import React from 'react';
import {shallow} from 'enzyme';
import Main from './Main';

describe('Main', () => {
    let component
    beforeEach(() => {
        component = shallow(<Main/>);
    })

    it('renders without crashing', () => {
        expect(component).toBeTruthy()
    });

    it('renders with both Routes inside the header', () => {
        expect(component.find('Route')).toHaveLength(2)
    });
})

