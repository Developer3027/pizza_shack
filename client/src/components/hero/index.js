import React, { useState } from 'react'
import Navbar from '../navbar'
import Sidebar from '../sidebar/index'

import { HeroContainer, HeroContent, HeroItem, HeroTitle, HeroTalk, HeroBtn } from './styles/hero.styles'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
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
