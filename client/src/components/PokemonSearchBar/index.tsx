import React from 'react'
import { FaSearch } from 'react-icons/fa'
import * as S from './styles'

const PokemonSearchBar = () => {
  return (
    <S.MainContainer>
      <S.InputSearch placeholder="Buscar Pokemon..." />
      <FaSearch
        size={20}
        color="#fff"
        style={{ position: 'absolute', right: '690px' }}
      />
    </S.MainContainer>
  )
}

export default PokemonSearchBar
