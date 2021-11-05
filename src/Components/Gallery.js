import React from 'react';
import ImageGrid from './ImageGrid'

function Gallery() {
  return (
    <main className="h-full">
      <div className="mx-4">
        <h1 className="font-extrabold text-6xl ml-4 my-8">PROJECTS / GALLERY</h1>
        <h1 className="mx-4 text-2xl">ARCHITECTURE</h1>
        <p className="text-sm mx-4 mt-2">superland studio’s aesthetic sensibility is driven by the brief and specifics of each project. Functionally we specialise in low-impact building and land solutions, but simplicity in style, colour and materiality is at the heart of all our work. Drawing from the Japanese concept of Wabi-sabi – ‘beauty in impermanence‘ – we creatively use and respond to the changing nature of buildings over time.</p>

        <ImageGrid />

        <h1 className="mx-4 text-2xl">PERMACULTURE</h1>
        <p className="text-sm mx-4 mt-2">Our permaculture projects encourage productive landscape design alongside building design – connecting the inputs and outputs of each to help create closed-loop systems. Our projects incorporate rainwater / grey water management systems, poultry systems, soil building, composting, bioshelters and a variety of edible landscaping techniques for everything from smallholdings to container and rooftop gardens.</p>

        <ImageGrid />

        <h1 className="mx-4 text-2xl">ILLUSTRATION</h1>
        <p className=" text-sm mx-4 mt-2">Images are a powerful way of communicating ideas. superland studio provides hand drawn and scaled computer visuals for a variety of briefs – from visualising projects for private clients to collaborating on teaching materials for schools and permaculture training.</p>

        <ImageGrid />

      </div>

    </main>
  )
}

export default Gallery