import React from 'react';
import Header from './Header'

function Services() {
  return (
    <main>
      <Header />
      <section className="mx-8 h-full">
        <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/101674505/original/e4b93eb2eb86b6016bd7605eee035a31f4d72a80/do-chief-architect-x9-x8-x7-and-x6.jpg" alt="#" />
      </section>
      <section className="mt-14 mx-8">
        <h4 className="font-bold">SERVICES</h4>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p>superland studio offers full architectural & permaculture design
              services; we see both disciplines as overlapping in their influence and
              approach, critical to achieving fully integrated ecological living.</p>
            <br />
            <p>Visualising ideas is part of our work at every stage</p>
            <br />
            <p className="font-bold">Architectural Services</p>
            <br />
            <p>
              We cover all stages of design and construction - from feasibility
              design to planning, supervision on site through to completion and
              handover to the client. Whatever your budget, we provide you with
              a tailored service at any stage of your building process.
              We work with all sizes of projects from medium to small bespoke
              structures. Our work includes residential, conservation, commercial
              and community builds.</p>
            <br />
            <div className="ml-4">
              <ul className="">
                <li>Surevy Services</li>
                <li>Feasibility Design</li>
                <li>Planning Applications</li>
                <li>Building Regulation</li>
                <li>Conservation of Historic Buildings and Structures</li>
                <li>Green building / Strawbale Construction / green roofs</li>
                <li>Financial Management and Job Costing</li>
                <li>Project Management / Inspection and Supervision</li>
                <li>Interior / Furniture Design</li>
                <li>Handover / buildings maintenance</li>
              </ul>
            </div>
          </div>
          <div>
            <img src="https://static.dezeen.com/uploads/2021/05/wall-door-by-lualdi_dezeen_2364_col_5-852x1278.jpg" alt="#" />
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-300 mt-8">
        <div className="grid grid-cols-2 gap-2 mx-8">
          <div>
            <h4 className="font-bold">Permaculture Services</h4>
            <br />
            <p>
              superland studio provides a full spectrum of applied permaculture
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
          <div className="my-4">
            <img src="https://static.dezeen.com/uploads/2021/05/wall-door-by-lualdi_dezeen_2364_col_5-852x1278.jpg" alt="#" />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-6 my-8">
          <h4 className="font-bold">Illustration / Visualisation / Teaching Resources</h4>
          <p>We offer a variety of illustration services from hand drawn to scaled
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
      <section>
        <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/101674505/original/e4b93eb2eb86b6016bd7605eee035a31f4d72a80/do-chief-architect-x9-x8-x7-and-x6.jpg" alt="#" />
      </section>
    </main>

  )
}

export default Services