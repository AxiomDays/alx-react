import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils.js'

const data = getLatestNotification();

export default function Notif() {
	return (
		<div className="Notifications">
			<p>
				Here is the list of notifications
			</p>
			<div>
				<ul>
					<li data="default">New course available</li>
					<li data="urgent">New resume available</li>
					<li dangerouslySetInnerHTML={{ __html: data }}></li>
				</ul>
				<button
					style={{ alignItems: "end" }}
					aria-label="close">
					<img alt="close button" src="0x01-react_intro/task_2/dashboard/public/favicon.ico">
					</img>
				</button>
			</div>
		</div>
	)
}

