import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  .text {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    font-weight: 600;
    color: black;
  }

  .button {
    display: block;
    cursor: pointer;
    margin: 0;
    padding: 8px 8px;
    min-width: 90px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.04em;
    text-transform: capitalize;
    border: 1px solid rgb(31, 45, 201);
    border-radius: 10px;
    background-color: aliceblue;
    color: black;
    outline: 2px solid transparent;

    &:hover,
    &:focus {
      background-color: rgb(228 168 206);;
      transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
        color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
