import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  min-height: 50vh;
  padding: 40px 0;
  color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  .wrapper-contact {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-evenly;
    padding: 0 20px;
    margin: 0 0 50px 0;

    @media (max-width: 767px) {
      justify-content: flex-start;

      ul {
        width: 50%
      };
    }
    
    ul li {
      margin: 5px 0;
    }

    h2, p {
      margin: 20px 0;
    }

    a {
      margin-right: 10px;
    }
  }
`;