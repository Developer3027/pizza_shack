import styled from 'styled-components/macro'
import pizzaBg from '../../../images/pizza-bg.jpg'

{ HeroContainer, HeroContent, HeroItem, HeroTitle, HeroTalk, HeroBtn }

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${pizzaBg});
    background-position: center;
    background-size:cover;
    height: 100vh;
`
export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

export const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen
`

export const HeroTitle = styled.h1``

export const HeroTalk = styled.p``

export const HeroBtn = styled.button``