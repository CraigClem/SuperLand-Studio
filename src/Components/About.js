import React from 'react';
import { Image, Transformation } from 'cloudinary-react'
import Footer from './Footer'


function About() {
  return (
    <>
      <header className="w-full">
        <div className="hero flex flex-container relative w-full bg-gray-300">
          <h1 className="text-4xl font-bold text-black absolute bottom-0 left-3 lg:text-7xl lg:ml-24">
            ABOUT</h1>
        </div>
      </header>

      <main className="my-4">
        <section className="grid grid-cols-3 gap-1 m-4 text-sm lg:text-2xl lg:grid-cols-4">
          <div class='sarah-headshot lg:h-96 lg:w-auto lg:ml-24'></div>
          <div className="col-span-2 flex flex-col lg:col-span-2 lg:w-1/3 lg:leading-relaxed lg:ml-8">
            <p className="">Founder Sarah Burton is a trained architect and permaculture designer and draws from experience in both fields to provide holistic design solutions to buildings and landscapes.
            </p>
            <p className="lg:mt-4">
              <span className="font-bold">Sarah Burton BA (Hons) Dip Arch</span>
            </p>
          </div>

          <div className="lg:col-span-1 lg:row-span-3 lg:h-screen hidden md:table-cell">
            <Image cloudName="drevpwd0d"
              publicId="Bedwell_SHOT_4_final_-_Oliver_Perrott_b9og5g.jpg" >
              <Transformation width="1000" height="2000" crop="fill" />
            </Image>
          </div>


          <div className="col-span-3 h-full text-sm lg:text-2xl lg:col-span-3 mt-4 lg:ml-24 lg:leading-relaxed">
            <p className="">
              Sarah Burton completed RIBA Part 2 at The Bartlett School of Architecture, UCL in 2005. After working for six years in architectural practices
              in London and Sydney, she discovered permaculture whilst living with
              an eco-community in Byron Bay, Australia. Sarah was inspired by how
              permaculture added the ecological lens through which architecture could
              benefit. She completed her Permaculture Design Course in 2012 and
              established SuperlandStudio a few years later, integrating permaculture’s
              design principles into her own architecture work.</p>
            <br />
            <p className="">Sarah has completed courses on Passivhaus and retrofit at The Green
              Register. She continues to research and work in both fields of sustainable architecture and permaculture, drawing from the two disciplines to inform her designs.
              She is passionate about education of agroecological practices and provides valuable illustrations and graphic resources for Niels Corfield, Edible
              Cities and Permaculture Network training and education programmes.</p>
            <br />
            <p className="">Sarah now runs the Studio from her Cornish smallholding near
              Camborne, where ecological design is an integral part of her home.
            </p>
          </div>
        </section>

        <section className="bg-gray-300 w-full grid grid-cols-2 h-full lg:flex lg:flex-row lg:h-1/2">
          <div className="lg:col-span-2 col-span-3 lg:w-1/2 lg:ml-24">
            <h4 className="font-bold mx-4 pt-8 text-2xl lg:text-6xl">PARTNERS</h4>
            <p className="mx-4 mt-4 text-sm grid col-span-3 lg:text-2xl lg:col-span-1 lg:leading-loose">
              NIELS CORFIELD / EDIBLE CITIES – Based in the south west, Niels
              Corfield is an agroecological educator and has been working closely
              with superland studio for a decade to deliver consulting services for
              productive and edible landscape design, as well as a variety of education resources in permaculture design practice.
              <a href="https://nielscorfield.com/" target="_blank" rel="noreferrer" className="italic text-white underline"><br /> www.nielscorfield.com</a>
            </p>
          </div>
          <div className="col-start-1 col-span-3 p-4 lg:col-span-2">
            <Image cloudName="drevpwd0d"
              publicId="bee_on_borage_jtlm6d.jpg" >
              <Transformation width="1000" crop="fit" />
            </Image>
          </div>
        </section>


        <section className="w-full h-full grid grid-cols-3 my-8 text-sm lg:text-2xl">
          <div className="col-span-3 perm-img mx-4 lg:col-span-2 lg:h-full">
            <Image cloudName="drevpwd0d" publicId="living_buildings_FINAL_idmawe.jpg">
              <Transformation height="2000" width="3000" crop="fit" />
            </Image>
          </div>
          <div className="w-full h-full col-span-3 flex-col px-4 lg:col-span-1">
            <h4 className="font-bold my-4 text-xl lg:text-6xl">What is Permaculture?</h4>
            <p className="lg:leading-loose">
              Permaculture is a practical, holistic
              design approach to ecological living
              - observing how parts relate, how we
              use resources, connecting inputs and
              outputs, working with nature - we can
              develop long-term sustainable solutions.</p>
            <br />
            <p className="lg:leading-loose">
              When combining Architecture and Permaculture design, we create places that
              are both beautiful and abundant, and
              touch the earth lightly.
            </p>
          </div>


        </section>

        <section className="w-full h-full lg:flex lg:justify-center lg:align-middle">
          <div className="w-full bg-gray-300 p-4 text-sm lg:text-2xl lg:h-96 lg:flex lg:leading-loose">
            <p className="lg:w-2/3 lg:m-auto">
              <span className="font-bold">OUR NAMESAKE</span>: Inspired by the 1960s architecture collective SUPER STUDIO,
              super‘land’ studio seeks to engage contemporary architecture design with that of
              ecosystem design using the permaculture principles of Earth Care, People Care &
              Fair Share. We work closely with other like-minded designers, eco-builders and
              educators to deliver integrated ecological design for modern living.
            </p>

          </div>
        </section>

        <Footer />
      </main>
    </>


  )
}

export default About