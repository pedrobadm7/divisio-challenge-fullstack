import { gql } from '@apollo/client'

export const POKEMON_API = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      types
      number
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`
