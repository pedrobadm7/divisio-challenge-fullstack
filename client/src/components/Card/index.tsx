import React from 'react'
import Modal from '../Modal/index'
import { useModal } from '../Modal/useModal'
import * as S from './styles'

interface PokeCardProps {
  name: string
  id?: string
  imagePoke?: string
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

const Card = ({
  name,
  imagePoke,
  maxCP,
  maxHP,
  number,
  types,
  attacks
}: PokeCardProps) => {
  const { isShown, toggle } = useModal()
  const content = (
    <>
      <S.ModalContainer>
        <S.PokemonModalImage image={imagePoke} />

        <S.PokemonModalInfos>
          <h1>#{number}</h1>
          <p>{name}</p>
          <span>Estatísticas</span>
        </S.PokemonModalInfos>
      </S.ModalContainer>
      <S.PokemonModalStats>
        <span>CP: {maxCP}</span>
        <span>HP: {maxHP}</span>
        <div>
          {attacks.special.map((attack, index) => (
            <span key={index}>
              Attack: {attack.name} - Damage: {attack.damage}
            </span>
          ))}
        </div>
      </S.PokemonModalStats>
    </>
  )

  return (
    <>
      <S.PokemonContainer onClick={toggle} style={{ cursor: 'pointer' }}>
        <S.PokemonImage image={imagePoke} />
        <S.PokemonInfos>
          <h1>#{number}</h1>
          <p>{name}</p>
          <S.PokemonStats>
            <span>{types[0]}</span>
            {types[1] && <span>{types[1]}</span>}
          </S.PokemonStats>
        </S.PokemonInfos>
      </S.PokemonContainer>
      <Modal isShown={isShown} hide={toggle} modalContent={content} />
    </>
  )
}

export default Card
