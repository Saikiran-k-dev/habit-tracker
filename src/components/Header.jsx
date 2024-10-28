// Header.js
import React from 'react';
import { Link,Outlet } from 'react-router-dom';


const Header = () => {
  return (
    <div>
    <header>
      <h1>Habit Tracker</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
    <Outlet />
    </div>

  );
};

export default Header;
