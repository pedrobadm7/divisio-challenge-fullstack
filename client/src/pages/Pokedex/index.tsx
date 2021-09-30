import React from 'react'
import * as S from './styles'
import pokedex from '../../components/images/pokedex.svg'
import pokeBall from '../../components/images/pokeball.svg'
import bulbasaur from '../../components/images/bulbasauro.png'

import PokemonSearchBar from '../../components/PokemonSearchBar/index'
import Card from '../../components/Card/index'

const Pokedex = () => {
  return (
    <S.MainContainer>
      <S.Header>
        <img src={pokeBall} style={{ height: '90px', paddingRight: '30px' }} />
        <img src={pokedex} style={{ height: '50px' }} />
      </S.Header>
      <PokemonSearchBar />
      <Card
        number="Um"
        name="Bulbasauro"
        maxCP={100}
        maxHP={100}
        imagePoke={bulbasaur}
      />
    </S.MainContainer>
  )
}
export default Pokedex
