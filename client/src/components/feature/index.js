import React from 'react'

import { FeaturedContainer, FeaturedTitle, FeaturedContent, FeatureButton } from './style/feature.style'

const Feature = () => {

  return(
    <FeaturedContainer>
      <FeaturedTitle>Pizza of the Day</FeaturedTitle>
      <FeaturedContent>Todays feature pizza is back to basic's and always a favorite.</FeaturedContent>
      <FeatureButton>Order Now</FeatureButton>
    </FeaturedContainer>
  )
}

export default Feature
