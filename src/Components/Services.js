import React from 'react';
import Header from './Header'
import Footer from './Footer'
import { Image, Transformation } from 'cloudinary-react'

function Services() {
  return (
    <main className='w-full h-full'>
      <Header />
      <section className="h-full w-full">
        <Image
          cloudName="drevpwd0d"
          publicId="A010_GA08H_SECTION_AA_vfdqcp.jpeg" >
          <Transformation height="600" width="4000" crop="crop" quality="100" />
        </Image>

      </section>
      <section className="mt-2 p-4 w-full">
        <p className="font-bold text-3xl mb-8 lg:text-7xl lg:ml-24">SERVICES</p>
        <div className="grid grid-cols-2 gap-2 w-full lg:ml-24 lg:mb-12">
          <div className="h-full w-full text-sm col-span-2 lg:text-2xl lg:col-span-1">
            <p class=''>super<strong>land</strong> studio offers full architectural & permaculture design
              services; we see both disciplines as overlapping in their influence and
              approach, critical to achieving fully integrated ecological living. Visualising ideas is part of our work at every stage.</p>
            <br />
            <p className="font-bold text-2xl lg:text-4xl">Architectural Services</p>
            <br />
            <p className="">
              We cover all stages of design and construction - from feasibility
              design to planning, supervision on site through to completion and
              handover to the client. Whatever your budget, we provide you with
              a tailored service at any stage of your building process.
              We work with all sizes of projects from medium to small bespoke
              structures. Our work includes residential, conservation, commercial
              and community builds.</p>
            <br />
            <div className="ml-4 lg:">
              <ul className="">
                <li>Surevy Services</li>
                <li>Feasibility Design</li>
                <li>Planning Applications</li>
                <li>Building Regulation Applications</li>
                <li>Conservation of Historic Buildings and Structures</li>
                <li>Green building / Strawbale Construction / green roofs</li>
                <li>Financial Management and Job Costing</li>
                <li>Project Management / Inspection and Supervision</li>
                <li>Interior / Furniture Design</li>
                <li>Handover / buildings maintenance</li>
              </ul>
            </div>
          </div>
          <div className="h-full w-full arch-img lg:ml-4">
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-300">
        <div className="grid grid-cols-2 gap-2 p-4 text-sm lg:text-2xl">
          <div className="h-full w-full mt-4 col-span-2 lg:col-span-1 lg:ml-24">
            <h4 className="font-bold text-2xl lg:text-4xl">Permaculture Services</h4>
            <br />
            <p className=''>
              super<strong>land</strong> studio provides a full spectrum of applied permaculture
              design services.
              Our permaculture projects encourage productive landscape design
              alongside building design – connecting the inputs and outputs of
              each to help create closed-loop systems. Our projects incorporate
              rainwater / grey water management systems, poultry systems, soil
              building, composting, bioshelters and a variety of edible landscaping techniques for everything from smallholdings to container and
              rooftop gardens.
              Our work includes private and community gardens, public spaces
              and smallholding land management.
            </p>
            <br />
            <ul className="ml-4">
              <li>Feasibility Design</li>
              <li>Strategic site analysis</li>
              <li>Ecological Landscaping / Garden Design</li>
              <li>Edible landscaping & food forests</li>
              <li>Urban agriculture / Bioshelters</li>
              <li>Native plants and trees</li>
              <li>Agroforestry & small-holding planning</li>
              <li>Habitat creation / Re-wilding </li>
              <li>Soil building and remediation</li>
              <li>Water wise landscaping and collection</li>
              <li>Waste Systems and Composting</li>
              <li>Poultry Systems</li>
            </ul>
          </div>
          <div className="my-4 w-full lg:w-full lg:ml-72 hidden md:table-cell">
            <Image
              cloudName="drevpwd0d"
              publicId="IMG_7993_xfcxgu" >
              <Transformation height="800" width="auto" crop="fill" quality="100" />
            </Image>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="p-4 text-sm lg:text-2xl lg:ml-24">
          <p className="font-bold text-2xl mb-4 lg:text-4xl">Illustration / Visualisation / Teaching Resources</p>
          <p className='lg:w-2/3'>We offer a variety of illustration services from hand drawn to scaled
            computer visuals to infographics. We simplifying complex ideas
            and systems into easy-to-understand pictures.
            Our work includes visuals for commercial briefs, school resources,
            community and permaculture training</p>
          <br />
          <ul className="ml-4">
            <li>Illustration & infographics</li>
            <li>Perspective and 3D visuals</li>
            <li>Forest Garden teaching packs</li>
            <li>Mushroom cultivation information packs</li>
          </ul>
        </div>
      </section>

      <section className="w-full h-full">
        <div className="w-full">
          <Image
            cloudName="drevpwd0d"
            publicId="FRONT_PAGE_GRAPHIC_REVISED_2_HAND_tp3szz.png" >
            <Transformation height="883" crop="fill" />

          </Image>
        </div>
      </section>
      <Footer />
    </main>

  )
}

export default Services