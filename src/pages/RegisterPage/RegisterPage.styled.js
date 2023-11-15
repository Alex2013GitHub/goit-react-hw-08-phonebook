import styled from 'styled-components';

export const StyledRegisterPage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;

  .form {
    width: 400px;
  }

  .label {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    font-weight: 600;
  }

  .input {
    width: 100%;
    height: 30px;
    margin-top: 8px;
    margin-bottom: 14px;
    padding: 14px 24px;
    outline: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 100px;
    border: none;
    transition: outline var(--duration-timing-func);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.04em;
    color: black;
  }

  .btn {
    display: block;
    cursor: pointer;
    margin: 0;
    padding: 12px 24px;
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
    color: rgb(0, 0, 153);
    outline: 2px solid transparent;

    &:hover,
    &:focus {
      background-color: #27d26f;
    }
  }
`;
