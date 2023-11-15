import styled from 'styled-components';

export const StyledContacts = styled.div`
  width: 360px;

  .item {
    margin-bottom: 8px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  .btn_delete {
    color: black;

    &:hover,
    &:focus {
      background-color: red;
      color: white;
    }
  }
`;
