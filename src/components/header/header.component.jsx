import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
           EL AGGREGATOR 
        </Link>
        <div className='options'>
            <Link className='option' to='/sign-in'>
               SIGN IN 
            </Link>
        </div>
    </div>
)

export default Header;