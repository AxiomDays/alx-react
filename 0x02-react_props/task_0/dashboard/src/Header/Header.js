import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Header() {
    return (
        <div className='App-header'>
            <img src={logo} alt='Holberton' />
            <h1>School dashboard</h1>
        </div>
    );
}

export default Header;