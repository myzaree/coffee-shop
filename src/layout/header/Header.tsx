import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.less';

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <img src="images/logo.png" alt="Site logo" />
      <h1>Coffee Shop</h1>
      <ul>
        <Link to="/">
          <li className={pathname === '/' ? 'active' : ''}>Главная</li>
        </Link>
        <Link to="/history">
          <li className={pathname === '/history' ? 'active' : ''}>
            История заказов
          </li>
        </Link>
      </ul>
    </header>
  );
};
