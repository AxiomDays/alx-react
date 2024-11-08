import React from 'react';
import Login from './Login/Login';
import { shallow } from 'enzyme';


describe('test', () => {
    it('renders without crashing', () => {
        const comp = shallow(<Login />)
        expect(comp).toBeDefined();
    }
    )

    it('renders login', () => {
        const comp = shallow(<Login />)
        expect(comp.find('main-login').exists()).toEqual(true);
    }
    )

});