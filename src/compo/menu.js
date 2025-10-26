import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-item">Settings</div>
      <div className="menu-item">Subscription</div>
      <div className="menu-divider"></div>
      <div className="menu-item logout">Log out</div>
    </div>
  );
};

export default Menu;