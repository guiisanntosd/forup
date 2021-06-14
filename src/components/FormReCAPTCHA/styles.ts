import styled from 'styled-components';

export const Container = styled.div`

  form {
    display: grid;
    grid: auto/1fr 1fr;
    gap: 10px;
    width: 65%;
    margin:  40px auto;

    @media (max-width: 767px) {
      width: 95%;
      grid: auto/50% 50%;
    }

    .input-control {
      position: relative;
      align-self: flex-end;

      :nth-child(7), :nth-child(8) {
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

  select, input, textarea {
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
      border-color: #FF2C00;
      ~ label {
        font-size: 10pt;
        top: 0;
        color: #FF2C00;
      }
    }
    
    :focus {
      border-color: #FF2C00;
      ~ label {
        font-size: 10pt;
        top: 0;
        color: #FF2C00;
      }
    }
  }
`;