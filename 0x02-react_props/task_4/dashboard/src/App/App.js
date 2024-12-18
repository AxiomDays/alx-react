import React from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';

function App({ isLoggedIn }) {
	return (
		<>
			<Notifications />
			<div className='App'>
				<Header />
				<div className='App-body'>
					<p>Login to access the full dashboard</p>
					{isLoggedIn ? <Login /> : <CourseList />}
				</div>
				<Footer />
			</div>
		</>
	);
}

App.defaultProps = {
	isLoggedIn: false,
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
};

export default App;
