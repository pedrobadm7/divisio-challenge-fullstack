import React, { useState, useEffect } from 'react'
import pokedex from '../../components/images/pokedex.svg'
import pokeBall from '../../components/images/pokeball.svg'
import bulbasaur from '../../components/images/bulbasauro.png'

import * as S from './styles'

import { useQuery } from '@apollo/client'
import { POKEMON_API } from '../../gql/pokemonAPI'

import PokemonSearchBar from '../../components/PokemonSearchBar/index'
import Card from '../../components/Card/index'

interface PokemonsInfo {
  id: string
  name: string
  image: string
  maxCP: number
  maxHP: number
  number: string
}

const Pokedex = () => {
  const [pokemonInfos, setPokemonInfos] = useState<PokemonsInfo[]>([])

  const { data: { pokemons = [] } = {} } = useQuery(POKEMON_API, {
    variables: {
      first: 151
    }
  })

  useEffect(() => {
    if (pokemons) {
      setPokemonInfos(pokemons)
    }
  }, [pokemonInfos])

  return (
    <S.MainContainer>
      <S.Header>
        <img src={pokeBall} style={{ height: '90px', paddingRight: '30px' }} />
        <img src={pokedex} style={{ height: '50px' }} />
      </S.Header>
      <PokemonSearchBar />
      {pokemonInfos &&
        pokemonInfos.map((pokemon) => (
          <Card
            key={pokemon.id}
            number={pokemon.number}
            name={pokemon.name}
            maxCP={pokemon.maxCP}
            maxHP={pokemon.maxHP}
            imagePoke={pokemon.image}
          />
        ))}
    </S.MainContainer>
  )
}
export default Pokedex
