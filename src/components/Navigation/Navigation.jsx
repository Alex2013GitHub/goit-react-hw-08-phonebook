import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';

import { StyledNavigation, StyledNavigationLogin } from './Navigation.styled';

const Header = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <StyledNavigation>
      <nav className="nav">
        <NavLink to="/login" className="logo">
          Your<span className="logo_black">Phonebook</span>
        </NavLink>

        {authenticated ? (
          <>
            <NavLink to="/contacts" className="header">
              Contacts
            </NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/" className="header">
              Home
            </NavLink>

            <StyledNavigationLogin>
              <NavLink to="/register" className="header_link">
                Register
              </NavLink>
              <NavLink to="/login" className="header_link">
                Login
              </NavLink>
            </StyledNavigationLogin>
          </>
        )}
      </nav>

      <Outlet />
    </StyledNavigation>
  );
};

export default Header;
