import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #FFF;
  
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

    p {
      color: #777;
      line-height: 1.7em;
    }

    ul {
      margin: 40px 0 0 0;
      display: flex;
      border-bottom: solid 1px #0C0C0C;

      .active {
        border-bottom: solid 3px #FF5200;
        padding: 10px 0;
        color: #333;
      }

      li {
        margin: 0 30px 0 0;
        text-decoration: none;
        font-size: 11pt;
        cursor: pointer;
        color: #888;
        font-weight: 600;
        padding: 10px 0;
      }
    }
  }
`;

export const TopicContent = styled.div`
  .topic-box {
    border-bottom:  solid 1px #0C0C0C;
    padding: 30px 0;
    h5 {
      display: inline-block;
      font-size: .9rem;
      margin: 0 0 15px 0;
      padding: 6px 12px 6px 12px;
      background: #ff2500;
      color: #fff;
      border-radius: 2px;
    }

    h4 {
      font-size: 1.1rem;
      margin: 10px 0;
    }

    p {
      line-height: 1.4em;
    }
  }
`;