import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .main-video-frame {
    width: 100%;
    height: 100%;
    
    @media (max-width: 567px) {
      height: 200px;
    }
  }
`;

export const AreaMain = styled.div`
  display: grid;
  margin: 90px 0;
  padding: 6vh 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);

  @media (max-width: 991px) {
    background-size: cover;
    position: relative;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .wrapper-content {
      grid-column: 1!important;
      grid-row: 1!important;

      text-align: center;

      p {
        margin: 20px 0!important ;
        text-align: justify;
        color: #333;
      }
    }

    .wrapper-video {
      grid-column: 1!important;
      grid-row: 2!important;

      width: 75%;
      margin: 0 auto;
    }

    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 767px) {
    video {
      width: 100%;
    }
  }

  .text-title {
    width: 100%;

    @media (max-width: 767px) {
      text-align: center;
      margin: 100px 0 0 0;
      transform: translate(0, 0);
    }

    h1 {
      font-size: 2.9rem;
      line-height: .9;
      color: #000;

      @media (max-width: 767px) {
        font-size: 6.5vw;
        line-height: 7vw;
        letter-spacing: -2;
      }
    }
  }

  .wrapper-content {
    place-self: center;
    z-index: 1;
    grid-column: 1;
    grid-row: 2;
    padding: 0 30px;

    p {
      font-size: 14pt;
      margin:  20px 0;
      color: #000;
    }

    @media (max-width: 767px) {
      width: 100%;
      text-align: center;
    }
  }

  .wrapper-video {
    position: relative;
    grid-column: 2;
    grid-row: 2/4;

    @media (max-width: 991px) {
      transform: translate(0px, 0px);
    }

    .play {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      z-index: 99;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 767px) {
      width: 80%;

      video {
        height: auto;
      }
    }
  }
`;

export const WeDo = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 120px 0;
  color: #000;
  grid: auto/auto auto;
  background: linear-gradient(0deg, #FFF 90%, transparent);


  .lottie-class {
    opacity: .5;
    position: absolute;
    width: 100%;
    top: 0%;
    right: -40%;
    z-index: 1;
    transform: scaleX(-1);
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    padding: 40px 20px;
    .wrapper-content, .wrapper-wedo{
      width: 100%!important;
      padding: 0 10px!important;
    }
    video {
      width: 100%;
      height: auto;
    }
  }

  .wrapper-content {
    grid-row: 2;
    grid-column: 1/3;
    width: 100%;
    height: 100%;
    place-self: center;
    margin-left: 35%;

    @media (min-width: 991px) {
      margin: 0;
      width: 70%;
      grid-column: 2/4;
      place-self: center;
    }

    @media (max-width: 567px) {
      margin: 0;
      grid-column: 1/5;
      grid-row: 3;
      place-self: flex-end;
      transform: translateY(25%)
    }

    backdrop-filter: invert(1);
    mask-image: url('./assets/png/empreendedorismo.png');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: 85%;
  }

  .wrapper-wedo {
    margin: 50px 0;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 33vh 33vh 33vh;

    video {
      :nth-child(1) {
        grid-column: 1/3;
        grid-row: 1;
        place-self: flex-end;
      }

      :nth-child(2) {
        grid-column: 3/5;
        grid-row: 2;
        place-self: flex-end;
        
        @media (min-width: 991px) {
          grid-column: 3/5;
          place-self: center;
        }

        @media (max-width: 567px) {
          margin: 0;
          grid-column: 3/5;
          grid-row: 2;
          place-self: center;
          justify-self: flex-end
        }
      }

      :nth-child(3) {
        grid-column: 1/3;
        grid-row: 3;
        place-self: flex-end;
        @media (max-width: 991px) {
          margin: 0;
          place-self: flex-start;
        }
      }
    }
  }
`;

export const Brands = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  color: #000;
  position: relative;
  background: #FFF;

  .lottie-class {
    opacity: .5;
    position: absolute;
    width: 100%;
    top: -45%;
    right: -50%;
    z-index: 1;
  }

  canvas {
    position: absolute;
    width: 100%;
    top: -15%;
    right: -50%;
    z-index: -1;
  }

  .area-title {
    grid-column: span 4;
    grid-row: span 2;
    place-self: flex-end;

    p {
      padding: 0 20px;
    }
  }

  .wrapper-brands {
    padding: 0 40px;
    display: grid; 
    grid: auto /repeat(4, auto);
    grid-gap: 50px 55px;

    @media (max-width: 991px) {
      grid-gap: 50px 25px;
    }

    .brand {
      width: 75%;
      height: auto;
      
      @media (max-width: 991px) {
        width: 80%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export const Cases = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  color: #000;
  position: relative;
  background: linear-gradient(180deg, #FFF 90%, transparent);

  .lottie-class {
    opacity: .3;
    position: absolute;
    width: 100%;
    top: 5%;
    left: -60%;
    z-index: -1;
  }

  .wrapper-cases {
    padding: 0 20px;
    display: grid; 
    grid: auto /auto auto;
    grid-gap: 0 90px;

    .area-title {
      grid-column: span 2;
      grid-row: span 2;
    }

    @media (max-width: 567px) {
      grid: auto/auto auto;
      grid-gap: 15px;
    }
    
    .case {
      width: 100%;
      height: auto;
      grid-row: auto;
      text-align: center;

      h1 {
        font-size: 1.4rem;
        margin:  20px 0;
        color: #000;
        text-transform: uppercase;
        letter-spacing: .2rem;
      }
    }

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;

export const FormArea = styled.div`
  position: relative;
  max-width: 992px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;

  @media (max-width: 767px) {
    margin: 0 auto;
  }

  .wrapper-icon-animated {
    transform: scaleX(-1) rotate(-20deg);
    position: absolute;
    right: -20%;
    opacity: .7;
  }
`;