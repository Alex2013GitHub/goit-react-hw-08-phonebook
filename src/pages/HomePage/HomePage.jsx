import React from 'react';

import { StyledHomePage } from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledHomePage>
      <h1 className="title">Welcome to contact list!</h1>
      <p className="text">Please login to your account.</p>
    </StyledHomePage>
  );
};

export default HomePage;
