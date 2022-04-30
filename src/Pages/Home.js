import React from 'react'
import Hero from '../Components/Hero'
import Commit from '../Components/Commit'
import CommitSec from '../Components/CommitSec'
import SliderImage from '../Components/SliderImage'
import Cards from '../Components/Cards'
import Project from '../Components/Project'
import Society from '../Components/Society'

const Home = () => {
  return (
    <div>
      <Hero />
      <Commit />
      <CommitSec />
      <SliderImage />
      <Cards />
      <Project />
      <Society />
    </div>
  )
}

export default Home