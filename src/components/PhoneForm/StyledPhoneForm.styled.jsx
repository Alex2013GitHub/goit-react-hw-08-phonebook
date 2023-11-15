import styled from 'styled-components';

export const StyledPhoneForm = styled.div`
  .text {
    text-align: center;
    font-size: 36px;
    text-decoration: underline;
    text-decoration-style: double;
  }

  .text-white {
    text-align: center;
    font-size: 36px;
    text-decoration: underline;
    text-decoration-style: double;
    color: white;
  }

  .form {
    display: flex;
    flex-direction: column;
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
    margin-bottom: 14px;
    padding: 14px 24px;
    outline: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 100px;
    border: none;
    transition: outline var(--duration-timing-func);
    font-size: 20px;
    line-height: 1.29;
    letter-spacing: -0.04em;
    color: black;
  }

  .title {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: 0.04em;
  }

  .btn {
    display: block;
    margin: auto;
    min-width: 110px;
    height: 40px;
    padding: 5px 20px;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    cursor: pointer;
    background-color: white;
    color: black;

    &:hover,
    &:focus {
      background-color: rgb(21, 184, 21);
      color: white;
      transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
        color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;
