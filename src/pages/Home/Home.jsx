import React from 'react';

import { StyledHome } from './Home.styled';

const HomePage = () => {
  return (
    <StyledHome>
      <h1 className="title">
        Phonebook welcome page{' '}
        <span role="img" aria-label="Telephone icon">
          ☎️
        </span>
      </h1>
    </StyledHome>
  );
};

export default HomePage;
