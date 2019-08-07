import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('Header', () => {
    let component
    beforeEach(() => {
        component = shallow(<Header/>);
    })

    it('renders without crashing', () => {
        expect(component).toBeTruthy()
    });

    it('renders with both links inside the header', () => {
        expect(component.find('NavLink')).toHaveLength(2)
    });
})

