import React from 'react'
import Navbar from '../navbar'

import { HeroContainer, HeroContent, HeroItem, HeroTitle, HeroTalk, HeroBtn } from './styles/hero.styles'

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Navbar />
        <HeroContent>
          <HeroItem>
            <HeroTitle>Pizza Shack</HeroTitle>
            <HeroTalk>Best Pizza and games in York</HeroTalk>
            <HeroBtn>Order Up!</HeroBtn>
          </HeroItem>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default Hero
