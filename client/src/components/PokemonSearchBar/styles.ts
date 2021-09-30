import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InputSearch = styled.input`
  width: 600px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: bold;
  margin: 40px;

  ::-webkit-input-placeholder {
    font-family: Roboto, Helvetica, sans-serif;
    font-style: normal;
    color: #fff;
    padding: 0 0 0 15px;
  }
`
