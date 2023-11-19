import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  background: hwb(138 33% 38% / 0.7);

  .appstyled {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    width: 800px;
    padding-top: 15px;

    margin: 0 auto;
  }

  .text {
    text-align: center;
    font-size: 36px;
  }
`;
