import React from 'react';
import ArchitectureImg from './ArchitectureImg'
import PermacultureImg from './PermacultureImg'
import Header from './Header'

function Gallery() {
  return (

    <main className="h-full w-full text-sm">
      <Header />
      <div className="my-12">
        <h1 className="font-extrabold text-4xl ml-4 my-8 lg:text-6xl xl:text-8xl">PROJECTS / GALLERY</h1>
        <h1 className="mx-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">ARCHITECTURE</h1>
        <p className="mx-4 my-8 xl:text-2xl">super<strong>land</strong> studio’s aesthetic sensibility is driven by the brief and specifics of each project. Functionally we specialise in low-impact building and land solutions, but simplicity in style, colour and materiality is at the heart of all our work. Drawing from the Japanese concept of Wabi-sabi – ‘beauty in impermanence‘ – we creatively use and respond to the changing nature of buildings over time.</p>
      </div>

      <ArchitectureImg />
      <div className="my-12">
        <h1 className="mx-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">PERMACULTURE</h1>
        <p className="mx-4 my-8 lg:text-xl xl:text-2xl">Our permaculture projects encourage productive landscape design alongside building design – connecting the inputs and outputs of each to help create closed-loop systems. Our projects incorporate rainwater / grey water management systems, poultry systems, soil building, composting, bioshelters and a variety of edible landscaping techniques for everything from smallholdings to container and rooftop gardens.</p>

        <PermacultureImg />

      </div>

    </main>
  )
}

export default Gallery