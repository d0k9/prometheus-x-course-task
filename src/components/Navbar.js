import React, { useState } from 'react';

const Navbar = () => {
  const [username, setUsername] = useState('Username');

  const handleSignOut = () => {
    setUsername('');
    window.location.href = '/SignIn';
  };

  return (
    <div className="header1">
      <div className="container-fluid">
        <hr className="hr-border" />
        <nav className="navbar">
          <span className="navbar-brand">
            JS BAND STORE / Vladyslav Dokukin
          </span>
          <button
            type="button"
            href="#"
            className="cart-button"
            onClick={() => window.location.href = '/Cart'}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            onClick={handleSignOut}
          >
            Sign-Out
          </button>
          <div className="circle" />
          <div className="username">{username}</div>
        </nav>
        <hr className="hr-border" />
      </div>
    </div>
  );
};

export default Navbar;