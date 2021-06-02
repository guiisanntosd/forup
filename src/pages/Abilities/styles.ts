import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  
  display: grid;
  grid: auto / 1fr 1fr;

  @media (max-width: 767px) {
    grid: auto/auto;
    height: auto;

    .wrapper-content {
      margin: 70px 30px!important;
    }
  }

  .wrapper-banner {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .wrapper-content {
    margin: 100px 60px;
    padding: 0 0 100px 0;
    overflow: auto;

    .box-ability {
      border: solid 2px rgba(255,255,255,.05);
      padding: 30px;
      margin: 0 0 30px 0;
      border-radius: 3px;
      position: relative;
      overflow: hidden;

      .overlay {
        position: absolute;
        top: -30px;
        right: -50px;

        svg {
          fill: rgb(255 41 0 / 15%);
        }
      }
      
      svg {
        margin-bottom: 40px;
        fill: #FF2900;
      }

      h3 {
        margin: 0 0 10px 0;
      }

      p {
        color: #777;
        line-height: 1.7em;
      }

      :hover {
        background: #FF2900;
        transition: all .2s ease-in-out;
        p {
          color: #FFF;
        }

        svg {
          fill: #FFF;
        }

        .overlay {
          svg {
            fill: #FF2900;
          }
        }
      }
    }
  }
`;