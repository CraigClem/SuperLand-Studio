import React from 'react';
import { Image, Transformation } from 'cloudinary-react'

function About() {
  return (
    <>
      <header>
        <div className="hero flex flex-container relative">
          <h1 className="text-2xl font-black flex absolute bottom-0 left-0 ml-8">
            ABOUT</h1>
        </div>
      </header>

      <main className="my-4">

        <section className="grid grid-cols-2 gap-1 mx-8 w-1/3 content-start">
          <div className="mt-4">
            <img src="https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder-250x300.jpg" alt="" />
          </div>
          <div className="w-full">
            <p className="">Founder Sarah Burton is a trained architect and permaculture designer and draws from experience in both fields to provide holistic design solutions to buildings and landscapes.
            </p>
            <p className="mt-5 w-full">
              <span className="font-bold">Sarah Burton BA (Hons) Dip Arch</span>
            </p>
          </div>


          <div className="col-span-2">
            <p className="mt-4">
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

          {/* <div>
            <div className="flex flex-row justify-end w-1/4 h-auto">
              <img src="https://images.unsplash.com/photo-1503818454-2a008dc38d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="tall" />
            </div>
          </div> */}

        </section>
        <section className="bg-gray-200 w-full grid grid-cols-2 my-8">
          <div className="my-2 ml-4">
            <h4 className="font-bold mx-4 pt-8">PARTNERS</h4>
            <p className="mx-4 pb-8 mt-4">
              NIELS CORFIELD / EDIBLE CITIES – Based in the south west, Niels
              Corfield is an agroecological educator and has been working closely
              with super<strong>land</strong> studio for a decade to deliver consulting services for
              productive and edible landscape design, as well as a variety of education resources in permaculture design practice.
              <a href="https://nielscorfield.com/" target="_blank" rel="noreferrer" className="italic text-gray-400 underline"><br /> www.nielscorfield.com</a>
            </p>
          </div>
          <div className="lg:py-0 py-4 my-4">
            <Image cloudName="drevpwd0d" publicId="hoghton_chapel_listed_conversion_kibsmf">
              <Transformation height="400" width="400" crop="fit" />
            </Image>
          </div>
        </section>


        <section className="bg-gray-200 w-full grid grid-cols-2 my-8">
          <div className="lg:py-0 lg:ml-8 py-4 my-4 mx-4">
            <Image cloudName="drevpwd0d" publicId="hoghton_chapel_listed_conversion_kibsmf">
              <Transformation height="400" width="400" crop="fit" />
            </Image>
          </div>
          <div className="w-full my-4">
            <h4 className="font-bold my-4 flex content-end">What is Permaculture?</h4>
            <p className="mt-4 mr-10">
              Permaculture is a practical, holistic
              design approach to ecological living
              - observing how parts relate, how we
              use resources, connecting inputs and
              outputs, working with nature - we can
              develop long-term sustainable solutions.</p>
            <br />
            <p className="mr-10">
              When combining Architecture and Permaculture design, we create places that
              are both beautiful and abundant, and
              touch the earth lightly.
            </p>
          </div>
        </section>
        <section className="w-full">
          <div className="w-full bg-gray-200 flex justify-center align-center my-4 py-8">
            <p className="ml-4 mr-96">
              <span className="font-bold">OUR NAMESAKE</span>: Inspired by the 1960s architecture collective SUPER STUDIO,
              super‘land’studio seeks to engage contemporary architecture design with that of
              ecosystem design using the permaculture principles of Earth Care, People Care &
              Fair Share. We work closely with other like-minded designers, eco-builders and
              educators to deliver integrated ecological design for modern living.
            </p>

          </div>
        </section>


      </main>
    </>

  )
}

export default About