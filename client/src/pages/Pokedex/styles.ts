import styled from 'styled-components'
import pokemonRuby from '../../static/images/pokemonRuby.png'

export const MainContainer = styled.div`
  background-image: url(${pokemonRuby});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    height: 105vh;
    width: 105vw;
  }
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
  min-width: 300px;
  width: calc(100% - 50px);
  margin: 40px 0;
  height: 1000rem;
  /* max-height: 1000px; */
  border-radius: 8px;
  padding: 16px;
  overflow-y: scroll;

  @media (max-width: 414px) {
    width: 350px;
  }

  @media (max-width: 320px) {
    width: 150px;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

export const SearchPokemonBarContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InputSearch = styled.input`
  width: 600px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: rgba(23, 23, 27, 0.6);
  font-size: 18px;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: bold;
  margin: 40px;
  ::-webkit-input-placeholder {
    font-family: Roboto, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    color: rgba(23, 23, 27, 0.6);
    padding: 0 0 0 15px;
  }

  @media (max-width: 415px) {
    width: 300px;
  }
`
