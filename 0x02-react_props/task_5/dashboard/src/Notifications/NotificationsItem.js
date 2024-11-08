import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const NotificationsItem = ({ type, html, value }) => {


    let li;

    value
        ? (li = <li data-notification-type={type}>{value}</li>)
        : (li = (
            <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
        ));

    return li;


}

NotificationsItem.defaultProps = {
    type: 'default',
    value: '',
    html: {},
};

NotificationsItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
};

export default NotificationsItem;