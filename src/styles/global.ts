import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'NeuzeitGro';
    font-display: swap;
    src: local('NeuzeitGro'), url('./assets/fonts/NeuzeitGro-Bla.woff2') format('woff2');
    font-weight: normal;
  }

  @font-face {
    font-family: 'NeuzeitGroRegular';
    font-display: swap;
    src: local('NeuzeitGroRegular'), url('./assets/fonts/NeuzeitGro-Reg.woff2') format('woff2');
    font-weight: normal;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (max-width:1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width:720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: url('./assets/jpg/background.jpg') no-repeat;
    background-size: contain;
    color: #fff;
    font-family:'NeuzeitGroRegular', sans-serif, sans;
    overflow-x: hidden;

    ::-webkit-scrollbar {width: 4px !important; background-color: transparent; height: 10px!important;}
    ::-webkit-scrollbar-track {-webkit-box-shadow: none !important;background-color: transparent; border-radius: 6px;}
    ::-webkit-scrollbar-thumb {background: rgb(46 52 54 / 0); border-radius: 5px;}
  }
  
  #root {
    overflow-x: hidden;
  }

  h1 {
    font-size: 2rem;
    font-family: 'NeuzeitGro', sans-serif;
  }

  p {
    font-family: 'NeuzeitGroRegular', sans-serif;
  }

  h2 {
    font-size: 1.5rem;
    font-family: 'NeuzeitGro', sans-serif;
  }

  button {
    cursor: pointer;
  }

  li { 
    list-style: none;
  }

  .fp-fancy-scrollbar {scrollbar-width: none; /* Firefox */-ms-overflow-style: none; /* IE 10+ */ -webkit-overflow-scrolling: touch; -webkit-transform: translateZ(0);}
  .fp-fancy-scrollbar::-webkit-scrollbar {width: 4px !important; background-color: transparent; height: 10px!important;}
  .fp-fancy-scrollbar::-webkit-scrollbar-track {-webkit-box-shadow: none !important;background-color: transparent; border-radius: 6px;}
  .fp-fancy-scrollbar::-webkit-scrollbar-thumb {background: rgb(46 52 54 / 0); border-radius: 5px;}

`;