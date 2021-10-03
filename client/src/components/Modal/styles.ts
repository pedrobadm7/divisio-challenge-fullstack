import styled from 'styled-components'
export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`
export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 20px;
`
export const Header = styled.div`
  background-color: #efefef;
  height: 50px;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`
export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: lightgray;
`
export const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  background-color: #efefef;

  img {
    border: 2px solid #8f9bb3;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 5px;
    background-color: #f7f9fc;
  }
`
export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
  width: 30vw;
`
