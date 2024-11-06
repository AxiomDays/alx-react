import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';


describe('test', () => {
        it('renders without crashing', () =>
                {
                        const comp = shallow(<Notif />)
                        expect(comp).toBeDefined();
                }
        )

	it('renders three items', () =>
                {
                        const comp = shallow(<Notif />)
                        expect(comp.find('li')).toHaveLength(3);
                }                                                                            )

	it('renders the correct text', () =>
                {
                        const comp = shallow(<Notif />)
                        expect(comp.find('p').prop('children')).toBe('Here is the list of notifications');
                }                                                                            )
})
