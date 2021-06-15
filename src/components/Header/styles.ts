import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 30px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  
  @media (max-width: 991px) {
    padding: 0;
  }
    
  .wrapper-menu {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .invert {
    img {
      filter: invert(1);
    }

    ul {
      display: flex;
      justify-content: center;

      .active {
        border-radius: 3px;
        background: #000!important;
        color: #FFF!important;
        span, li {
          color: #FFF!important;
        }
      }
      
      li {
        cursor: pointer;
        font-size: 8pt;
        margin: 0;
        padding: 15px 17px;
        border-radius: 3px;
        font-weight: 600;
        letter-spacing: 2.2px;
        color: #000!important;
        span {
          color: #000!important;
        }
      }
    }
  }

  .wrapper-logo {
    position: fixed;
    top: 25px;
    left: 0;
    width: 15rem;
    z-index: 999;

    svg {
      height: 55px;
      backdrop-filter: invert(1);
      mask-image: url('./assets/logo.svg');
      mask-repeat: no-repeat;
      mask-position: center;
      mask-size: contain;

      path {
        fill: transparent;
      }
    }
    
    @media (max-width: 991px) {
      width: 12rem;
    }
  }

  .wrapper-content {
    width: 100%;

    @media (max-width: 991px) {
      .visible {
        display: none;
      }
    }

    ul {
      display: flex;
      justify-content: flex-end;
      padding: 0 60px 0 0;
      
      @media (max-width: 991px) {
        height: 100vh;
        display: grid;
        grid: repeat(7, 55px)/auto;
        padding: 80px 0;
        backdrop-filter: blur(7px);
        background: rgb(0 0 0 / 10%);

        li {
          width: 100vw;
          margin: 0 auto;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;

          span {
            display: none;
          }

          p {
            font-size: 12pt;
          }
        }
      }

      .active {
        border-radius: 3px;
        backdrop-filter: invert(1);
        color: #FFF;
        span {
          color: #FFF!important;
        }
      }
      
      li {
        cursor: pointer;
        font-size: 8pt;
        margin: 0;
        padding: 15px 17px;
        border-radius: 3px;
        font-weight: 600;
        letter-spacing: 2.2px;
        
        p {
          background: linear-gradient(to bottom, #9e9e9e, #000, #000);
          background-attachment: fixed;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          font-weight: bold;
          text-align: center;

          @media (max-width: 991px) {
            background: linear-gradient(to bottom,#bc0000,#ff2c00,#ff2c00);
            background-attachment: fixed;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            font-weight: bold;
            text-align: center;
          }
        }
        
        span {
          color: #FF2900!important;
        }
      }
    }
  }
`;


export const MenuHamburger = styled.span`
    width: 36px;
    height: 36px;
    padding: 6px;
    text-align: center;
    background: ${props => props.theme.color};
    cursor: pointer;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 30px;
    right: 30px;

  .lt, .lm, .lb {
    position:absolute;
    width:30px;
    height:2px;
    /* background:#ffffff; */
    transition: all .2s ease-in-out;
    backdrop-filter: invert(1);
  }

  .lt{
    top: ${props => props.theme.top.lt};
    transform: ${props => props.theme.rotateN};
  }
  .lm{
    top:15px;
    
    width: ${props => props.theme.width};
    opacity: ${props => props.theme.opacity};
  }
  .lb{
    top: ${props => props.theme.top.lb};
    transform: ${props => props.theme.rotateP};
  }

  @media (min-width: 992px) {
    display: none;
  }
`;