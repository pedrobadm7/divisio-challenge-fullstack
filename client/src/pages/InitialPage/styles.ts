import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#fffe60, #f8d110);
`

export const ButtonLink = styled(Link)`
  margin-top: 31px;
  background-color: #ff3d71;
  width: 124px;
  height: 56px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 42px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`
