import React, { useState, useEffect } from 'react'
import pokedex from '../../static/images/pokedex.svg'
import pokeBall from '../../static/images/pokeball.svg'

import * as S from './styles'

import { useQuery } from '@apollo/client'
import { POKEMON_API } from 'gql/pokemonAPI'

import Card from 'components/Card/index'
import Load from 'components/Load/index'

interface PokemonsInfo {
  id: string
  name: string
  image: string
  maxCP: number
  maxHP: number
  number: string
  types: TypesPokemon[]
  attacks: Special
}

interface Special {
  special: SpecialAttacks[]
}

interface SpecialAttacks {
  name: string
  damage: number
}
interface TypesPokemon {
  primaryType: string
  secondType: string
}

const Pokedex = () => {
  const [pokemonInfos, setPokemonInfos] = useState<PokemonsInfo[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  const {
    data: { pokemons = [] } = {},
    loading,
    error
  } = useQuery(POKEMON_API, {
    variables: {
      first: 151
    }
  })

  useEffect(() => {
    if (pokemons) {
      setPokemonInfos(pokemons)
    }
  }, [pokemonInfos])

  // useEffect(() => {
  //   if (pokemons && loading) {
  //     setPokemonInfos(pokemons)
  //   }
  // }, [pokemonInfos, loading])
  return (
    <S.MainContainer>
      <S.Header>
        <S.Pokeball src={pokeBall} />
        <S.Pokedex src={pokedex} />
      </S.Header>
      <S.SearchPokemonBarContainer>
        <S.InputSearch
          placeholder="Search your pokemon..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </S.SearchPokemonBarContainer>

      <S.BoxContent>
        <S.CardContainer>
          {pokemonInfos &&
            pokemonInfos
              .filter((pokemon) => {
                if (searchTerm === '') {
                  return pokemon
                } else if (
                  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return pokemon
                }
              })
              .map((pokemon) => (
                <Card
                  key={pokemon.id}
                  number={pokemon.number}
                  name={pokemon.name}
                  maxCP={pokemon.maxCP}
                  maxHP={pokemon.maxHP}
                  imagePoke={pokemon.image}
                  types={pokemon.types}
                  attacks={pokemon.attacks}
                />
              ))}
        </S.CardContainer>
        {loading && <Load />}
      </S.BoxContent>
    </S.MainContainer>
  )
}
export default Pokedex
