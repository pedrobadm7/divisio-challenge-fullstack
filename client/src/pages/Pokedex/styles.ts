import styled from 'styled-components'
import pokemonRuby from '../../static/images/pokemonRuby.png'

export const MainContainer = styled.div`
  background-image: url(${pokemonRuby});
  background-size: 100%;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 45px 0 0 0;
`
export const BoxContent = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  max-width: 1000px;
  width: 100%;
  margin: 40px 0;
  border-radius: 8px;
  padding: 16px;
  overflow-y: scroll;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
