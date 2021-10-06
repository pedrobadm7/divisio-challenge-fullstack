import styled, { keyframes } from 'styled-components'
import loaderPokeball from '../../static/images/pokeball_loader.png'

const loading = keyframes`
    0% {
        transform: scale3d(1, 1, 1);
    }

    25% {
        transform: scale3d(1.2, 0.8, 2);
    }

    100% {
        transform: scale3d(1, 1, 1);
    }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${loaderPokeball});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150px;

  width: 100%;
  height: 100%;

  animation: ${loading} 2s cubic-bezier(0.67, 0.01, 0.21, 0.75) infinite;
`
