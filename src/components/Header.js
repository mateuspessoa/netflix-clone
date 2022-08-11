import React from 'react';
import './Header.css';
import logo from '../assets/logonet.png'
import user from '../assets/usernet.png'

const Header = ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
                <img src={logo} alt="netflix" />
        </div>

        <div className="header--user">
                <img src={user} alt="usuário" />
        </div>
    </header>
  )
}

export default Header