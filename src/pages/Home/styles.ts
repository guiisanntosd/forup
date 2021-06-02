import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
  padding: 0 20px;

  .main-video-frame {
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


  .text-title {
    transform: translate(40%, -15%);
    
    @media (max-width: 767px) {
      margin: 100px 0 0 0;
      transform: translate(0, 0);
    }

    h1 {
      font-size: 2.4rem;
      line-height: .9;
      color: #9f57c7;
    }
  }

  .wrapper-content {
    width: 45%;
    z-index: 1;

    p {
      font-size: 14pt;
      margin:  20px 0;
     
      @media (max-width: 991px) {
        color: #000;
      }
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .wrapper-video {
    width: 55%;
    position: relative;

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

  .area-title {
    grid-column: span 4;
    grid-row: span 2;
    place-self: flex-end;

    p {
      padding: 0 20px;
    }

    .box-title {
      background: url('./assets/svg/asteroid-one.svg') no-repeat;
      background-size: cover;
      background-position: center;
      padding: 50px 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 767px) {
        background-size: 70%;
      }

      h1 {
        font-size: 3.4vw;

        @media (max-width: 767px) {
          font-size: 4vw;
        }
      }
    }
  }

  .wrapper-brands {
    padding: 0 20px;
    display: grid; 
    grid: auto /auto auto auto auto;
    grid-gap: 50px 20px;

    .brand {
      width: 100%;
      height: 80px;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

export const Cases = styled.div `
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 0;
  color: #000;

  .area-title {
    place-self: center;
    margin: 0 auto;

    .box-title {
      background: url('./assets/svg/asteroid-two.svg') no-repeat;
      background-size: 100%;
      background-position: center;
      padding: 50px 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 4vw;
      }
    }
  }

  .wrapper-cases {
    padding: 0 20px;
    display: grid; 
    grid: auto /auto auto;
    grid-gap: 0 20px;
    
    .case {
      width: 100%;
      height: auto;
      grid-row: auto;
      text-align: center;

      h1 {
        font-size: 1.4rem;
        margin:  20px 0;
        color: #333;
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