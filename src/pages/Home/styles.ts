import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
  .main-video-frame {
    width: 100%;
    height: 100%;
    
    @media (max-width: 567px) {
      height: 200px;
    }
  }
`;

export const AreaMain = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  flex-direction: row;
  padding: 0 20px;

  @media (max-width: 991px) {
    position: relative;
    background: url('./assets/jpg/mobile.jpg') no-repeat;
    background-size: cover;

    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgb(0 0 0 / 40%);
    }
  }

  .text-title {
    transform: translate(40%, -15%);
    
    @media (max-width: 767px) {
      text-align: center;
      margin: 100px 0 0 0;
      transform: translate(0, 0);
    }

    h1 {
      font-size: 2.4rem;
      line-height: .9;
      color: #FFF;

      @media (max-width: 767px) {
        font-size: 7vw;
        line-height: 7vw;
        letter-spacing: -2;
      }
    }
  }

  .wrapper-content {
    width: 45%;
    z-index: 1;

    p {
      font-size: 14pt;
      margin:  20px 0;
    }

    @media (max-width: 767px) {
      width: 100%;
      text-align: center;
    }
  }

  .wrapper-video {
    width: 55%;
    position: relative;
    transform: translate(50px, 80px);

    @media (max-width: 991px) {
      transform: translate(0px, 0px);
    }

    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      z-index: 99;
    }

    @media (max-width: 767px) {
      width: 90%;

      video {
        height: auto;
      }
    }
  }
`;

export const WeDo = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-flow: wrap;
  flex-direction: row;
  align-items: center;
  padding: 40px 0;
  color: #000;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    padding: 40px 20px;
    .wrapper-content, .wrapper-wedo{
      width: 100%!important;
      padding: 0 10px!important;
    }
    video {
      height: auto;
    }
  }

  .wrapper-content {
    width: 45%;
    padding: 0 20px;
  }

  .wrapper-wedo {
    margin: 50px 0;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 55%;

    video {
      
      place-self: center;

      :nth-child(1) {
        grid-column: span 2;
      }

      :nth-child(2) {
        grid-column: 2;
        grid-row: span 2;
      }

      :nth-child(3) {
        grid-row: span 2;
      }
    }
  }
`;

export const Brands = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  color: #000;
  position: relative;

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

    .box-title {
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 4vw;
        @media (max-width: 567px){
          font-size: 14vw;
        }
      }
    }
  }

  .wrapper-brands {
    padding: 0 40px;
    display: grid; 
    grid: auto /repeat(4, auto);
    grid-gap: 50px 80px;

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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  color: #000;

  .area-title {
    place-self: flex-start;

    .box-title {
      /* background: url('./assets/svg/asteroid-two.svg') no-repeat; */
      background-size: 100%;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 4vw;
        @media (max-width: 567px){
          font-size: 14vw;
        }
      }
    }
  }

  .wrapper-cases {
    padding: 0 20px;
    display: grid; 
    grid: auto /auto auto;
    grid-gap: 0 20px;

    @media (max-width: 567px) {
      grid: auto/auto
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
      object-fit: cover;
    }
  }
`;

export const FormArea = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;

  h1 {
    color: #000;
  }

  form {
    display: grid;
    grid: auto/1fr 1fr;
    gap: 10px;
    width: 80%;
    margin:  40px auto;

    @media (max-width: 767px) {
      width: 95%;
    }

    .input-control {
      position: relative;
      align-self: flex-end;

      :nth-child(7) {
        grid-column: span 2;
      }
    }

    label {
      position: absolute;
      top: 20px;
      left: 0;
      font-weight: 600;
      font-size: 12pt;
      transition: all .1s ease-in-out;
      color: #666;
    }
  }

  input, textarea {
    width: 100%;
    margin: 15px 0;
    font-size: 12pt;
    height: 50px;
    padding: 10px 15px;
    background: transparent;
    border: none;
    border-bottom: solid 3px #666;
    resize: vertical;

    :valid {
      border-color: #9f57c7;
      ~ label {
        font-size: 10pt;
        top: 0;
        color: #9f57c7;
      }
    }
    
    :focus {
      border-color: #9f57c7;
      ~ label {
        font-size: 10pt;
        top: 0;
        color: #9f57c7;
      }
    }
  }
`;