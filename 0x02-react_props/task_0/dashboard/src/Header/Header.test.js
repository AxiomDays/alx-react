import React from 'react';
import Header from './Header/Header';
import { shallow } from 'enzyme';


describe('test', () => {
    it('renders without crashing', () => {
        const comp = shallow(<Header />)
        expect(comp).toBeDefined();
    }
    )

    it('renders img without crashing', () => {
        const comp = shallow(<Header />)
        expect(comp.find(img)).toBeDefined();
    }
    )

    it('renders h1 without crashing', () => {
        const comp = shallow(<Header />)
        expect(comp.find(h1)).toBeDefined();
    }
    )
});