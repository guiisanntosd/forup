import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => props.theme};

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 45%);
  z-index: 9999;

  .modal-body {
    width: 90%;
    background: transparent;
    margin: 0 auto;
    
    @media (max-width: 991px) {
      width: 90%;
    }
  }

  .modal-header {
    padding: 20px;
    text-align: right;

    .close {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      cursor: pointer;
    }
  }

  .modal-content {
    background: transparent;
    padding: 20px;
    height: 80vh;
  }
`;
