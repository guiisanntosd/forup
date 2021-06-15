import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  padding: 40px 60px;
  background: #030303;
  margin-top: 70px;
  left: 3%;
  transform: translateX(-200%);
  transition: all .4 ease-in-out;
  z-index: 1;

  ul {
    li {
      margin: 20px auto;
      color: #FFF;
      letter-spacing: 2px;
    }
  }
  
  @media (max-width: 991px) {
    display: none;
  }
`;