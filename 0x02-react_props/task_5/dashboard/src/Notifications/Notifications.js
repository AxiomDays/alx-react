import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationsItem from './NotificationsItem'
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
	return (
		<>
			<div className='menuItem'>
				Your notifications
			</div>
			{displayDrawer &&
				(<div className='Notifications'>
					<p style={{ display: 'inline', marginRight: '80%' }}>
						Here is the list of notifications
					</p>
					<button
						aria-label='Close'
						onClick={console.log('Close button has been clicked')}
					>
						<img style={{ display: 'inline' }} src={closeIcon} alt='Close' />
					</button>
					<ul>
						<NotificationsItem type='urgent' value="New course available" />
						<NotificationsItem type='urgent' value="New course available" />
						<NotificationsItem type='urgent' html={{ __html: getLatestNotification() }} />
					</ul>
				</div>)
			}
		</>
	);
};

Notifications.defaultProps = {
	displayDrawer: false,
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
};

export default Notifications;
