import React from 'react';
import { shallow } from 'enzyme';
import NotificationsItem from './NotificationsItem';

describe('Notification tests', () => {
    it('renders Notification component without crashing', () => {
        const component = shallow(<NotificationsItem />);

        expect(component).toBeDefined();
    });
});