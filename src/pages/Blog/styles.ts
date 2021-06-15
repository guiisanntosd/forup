import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  width: 100%;
  height: auto;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20vh 0 0 0 ;
`;

export const Post = styled.div`
  display: grid;
  grid-template-columns: 35vw 35vw;
  grid-template-rows: 45vh;

  @media (max-width: 767px) {
    grid-template-columns: 80vw;
    grid-template-rows: 35vh auto;
  }

  .area-img {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    :hover {
      img {
        transform: scale(1.3);
      }
    }

    ::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      background: #fff;
      bottom: 0;
      right: 0;
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all .8s ease-in-out;
    }
  }

  .post-content {
    border: solid 1px #eeeeee;
    padding: 20px 30px;
    color: #333;
    background: #fff;
  }

`;