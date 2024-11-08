import React from 'react';
import Footer from './Footer/Footer';
import { shallow } from 'enzyme';


describe('test', () => {
    it('renders without crashing', () => {
        const comp = shallow(<Footer />)
        expect(comp).toBeDefined();
    }
    )

    it('renders accurate text', () => {
        const comp = shallow(<Footer />)
        expect(comp.find('App-footer')).toBe("Copyright");
    }
    )
});