import React from 'react'
import { types } from 'util'
import * as S from './styles'

interface PokeCardProps {
  name: string
  id?: number
  imagePoke?: any
  maxCP: number
  maxHP: number
  number: string
  types: TypesPokemon[]
}

interface TypesPokemon {
  primaryType: string
  secondType: string
}

const Card = ({
  name,
  id,
  imagePoke,
  maxCP,
  maxHP,
  number,
  types
}: PokeCardProps) => {
  console.log(types)
  return (
    <S.PokemonContainer>
      <S.PokemonImage image={imagePoke} />
      <S.PokemonInfos>
        <h1>#{number}</h1>
        <p>{name}</p>
        <S.PokemonStats>
          <span>CP:{maxCP}</span>
          <span>HP:{maxHP}</span>
          <span>{types[0]}</span>
          {types[1] && <span>{types[1]}</span>}
        </S.PokemonStats>
      </S.PokemonInfos>
    </S.PokemonContainer>
  )
}

export default Card
