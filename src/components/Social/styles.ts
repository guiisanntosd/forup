import styled from 'styled-components';

export const Midia = styled.div`
    position: fixed;
    z-index: 100;
    width: 20px;
    height: 150%;
    text-align: center;
    display: table;
    left: 10px;
    color: #000;

  ul {
    display: table-cell;
    vertical-align: middle;
    
    li {
      cursor: pointer;
      margin: 15px 0;


      :hover {
        color: #FF2900;
      }
    }
  }
`;

export const Phone = styled.div`
  position: fixed;
  top: 74%;
  right: -60px;
  z-index: 100;
  text-transform: uppercase;
  text-align: right;
  transform: rotate(270deg);
  letter-spacing: 3px;
  font-size: 12px;
  font-weight: 400;
  user-select: none;
  color: #000;
`;