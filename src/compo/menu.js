import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-container">
        {/* Settings */}
        <div className="menu-item">
          <span>Settings</span>
        </div>
        
        {/* Subscription */}
        <div className="menu-item">
          <span>Subscription</span>
        </div>
      </div>
      
      {/* Horizontal Line */}
      <div className="menu-divider"></div>
      
      {/* Logout */}
      <div className="menu-item logout">
        <span>Log out</span>
      </div>
    </div>
  );
};

export default Menu;