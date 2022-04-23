import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './style.css';

export default props => {
  return (
    <Menu className='menu'>
      <a className="menu-item" href="/">
        Гэр ахуй
      </a>
      <a className="menu-item" href="/salads">
        Хувцас
      </a>
      <a className="menu-item" href="/pizzas">
        Хоол хүнс
      </a>
      <a className="menu-item" href="/desserts">
        Цахилгаан бараа
      </a>
    </Menu>
  );
};