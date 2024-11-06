import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


describe('test', () => {
	it('renders without crashing', () =>
		{
			const comp = shallow(<App />)
			expect(comp).toBeDefined();
		}
	)

	it('renders app header without crashing', () =>
                {
                        const comp = shallow(<App />)
                        expect(comp.find('.App-header')).toBeDefined();
                }
        )

	it('renders app body without crashing', () =>
                {
                        const comp = shallow(<App />)
                        expect(comp.find('.App-body')).toBeDefined();
                }
        )

	it('renders app footer without crashing', () =>
                {
                        const comp = shallow(<App />)
                        expect(comp.find('.App-footer')).toBeDefined();
                }
        )
})
