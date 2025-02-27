import styled from 'styled-components'
import backgroundPokedex from '../../static/images/Pokeball.png'

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #ffffff;
  width: 300px;
  height: 150px;
  max-height: 300px;
  display: flex;
  align-items: center;
  padding: 16px 24px;
  margin-top: 20px;
  border-radius: 10px;
  background-image: url(${backgroundPokedex});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 150px 150px;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 414px) {
    width: 290px;
    height: 150px;
  }
`

export const PokemonImage = styled.div<any>`
  border-radius: 100%;
  border: 2px solid #b5b9c4;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  max-width: 100px;
  width: 100%;
  height: 100px;
  background-image: ${({ image }) => image && `url(${image})`};
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: 70px;
  background-color: #fff;
  background-position: center;
`

export const PokemonModalImage = styled.div<any>`
  border-radius: 100%;
  border: 2px solid #b5b9c4;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  max-width: 100px;
  width: 100%;
  height: 100px;
  background-image: ${({ image }) => image && `url(${image})`};
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: 70px;
  background-color: #fff;
  background-position: center;
`

export const PokemonInfos = styled.div`
  width: 80%;
  padding-left: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    font-family: Roboto;
    font-size: 26px;
    color: #262835;
    font-weight: bold;
    margin: 8px 0;
  }

  h1 {
    font-size: 18px;
    color: rgba(23, 23, 27, 0.6);
  }

  span {
    background-color: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #262835;
    font-size: 12px;
    border-radius: 32px;
    margin-bottom: 6px;
    margin-right: 10px;
    padding: 5px;
  }
`
export const PokemonModalInfos = styled.div`
  width: 80%;
  padding-left: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    font-family: Roboto;
    font-size: 26px;
    color: #262835;
    font-weight: bold;
    margin: 8px 0;
  }

  h1 {
    font-size: 18px;
    color: rgba(23, 23, 27, 0.6);
  }

  span {
    /* background-color: #efefef; */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #262835;
    font-size: 20px;
    border-radius: 32px;
    margin-bottom: 6px;
    margin-right: 10px;
    padding: 5px;
  }
`

export const PokemonStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;

  span {
    background-color: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #262835;
    font-size: 12px;
    border-radius: 32px;
    margin-bottom: 6px;
    margin-right: 10px;
    padding: 5px;
  }
`

export const PokemonModalStats = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0 0 10px;

  span {
    background-color: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #262835;
    font-size: 12px;
    border-radius: 32px;
    margin-bottom: 6px;
    margin-right: 10px;
    padding: 5px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
`
