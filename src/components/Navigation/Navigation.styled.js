import styled from 'styled-components';

export const StyledNavigation = styled.header`
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
   border-bottom: 1px solid #2a363b;
  
  background-color: hwb(214 24% 28% / 0.7);
  

  .nav {
    display: flex;
    margin-right: auto;
    align-items: center;
  }

  .logo {
    padding-top: 24px;
    padding-bottom: 22px;
    margin-left: 26px;
    font-weight: 800;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
  }

  .logo_black {
    color: hwb(215 0% 74% / 0.7);
    text-decoration: none;
  }

  .header {
    font-size: 22px;
    font-weight: 600;
    color: black;
    padding: 1px;
    margin-left: 60px;
    text-decoration: none;
    margin-right: auto;
   

    &.active {
      text-decoration: revert;
    }
  }
  }
`;

export const StyledNavigationLogin = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  .header_link {
    font-size: 22px;
    font-weight: 600;
    color: black;
    padding: 12px;
    margin-left: 24px;
    text-decoration: none;

    &.active {
      border: 1px solid #1f2dc9;
      border-radius: 4px;
      background-color: aliceblue;
      color: #000099;
    }
  }
`;
