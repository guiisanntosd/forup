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

    .box-news {
      padding: 30px 0;
      display: grid;
      grid: auto/auto auto;
      grid-gap: 40px;
      border: none;
      border-bottom: solid 1px rgba(255,255,255,.05);

      :last-child {
        border-bottom: none;
      }

      .date {
        background: #FF2500;
        border-radius: 3px;
        display: inline-table;
        flex-wrap: wrap;
        text-align: center;
        padding: 5px 10px;
      }

      .news-content {
        h3 {
          margin: 0 0 15px 0;
          text-transform: uppercase;
        }
        p {
          color: #777;
          line-height: 1.7em;
        } 
      }
    }
  }
`;