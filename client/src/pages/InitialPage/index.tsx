import React from 'react'
import * as S from './styles'

import logoImage from '../../components/images/logo.png'

const InitialPage = () => {
  return (
    <S.Container>
      <img src={logoImage} />
      <S.ButtonLink to="/pokedex">GO!</S.ButtonLink>
    </S.Container>
  )
}

export default InitialPage
