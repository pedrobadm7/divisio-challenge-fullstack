import React from 'react'
import * as S from './styles'

interface PokeCardProps {
  name: string
  id?: number
  imagePoke?: any
  maxCP: number
  maxHP: number
  number: string
}

const Card = (props: PokeCardProps) => {
  return (
    <S.PokemonContainer>
      <S.PokemonImage image={props.imagePoke} />
      <S.PokemonInfos>
        <h1>#{props.number}</h1>
        <p>{props.name}</p>
        <S.PokemonStats>
          <span>CP:{props.maxCP}</span>
          <span>HP:{props.maxHP}</span>
        </S.PokemonStats>
      </S.PokemonInfos>
    </S.PokemonContainer>
  )
}

export default Card
