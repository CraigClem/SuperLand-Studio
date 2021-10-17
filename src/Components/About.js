import React from 'react';

function About() {
  return (
    <>
      <header>
        <div className="hero flex flex-container">
          <h1 className="text-7xl font-black flex">
            ABOUT</h1>
        </div>

      </header>
      <main className="my-8 mx-0">
        <section className="container flex flex-row mx-8 w-2/3 content-start">
          <div>
            <img src="https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder-250x300.jpg" alt="" />
          </div>
          <div className="w-2/3">
            <p className="flex-col ml-4 w-2/3">Founder Sarah Burton is a trained architect and permaculture designer and draws from experience in both fields to provide holistic design solutions to buildings and landscapes.
              <br />
              <span className="font-bold">Sarah Burton BA (Hons) Dip Arch</span>
            </p>
          </div>

        </section>
        <section className="w-3/4 mx-8 my-4">
          <div className="w-3/4">
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
              Register. She continues to research and work in both fields of sustainable architecture and permaculture, drawing from the two disciplines to
              inform her designs.
              She is passionate about education of agroecological practices and provides valuable illustrations and graphic resources for Niels Corfield, Edible
              Cities and Permaculture Network training and education programmes.</p>
            <br />
            <p className="">Sarah now runs <span className="font-bold">superland studio</span> from her Cornish smallholding near
              Camborne, where ecological design is an integral part of her home.
            </p>
          </div>

          {/* <aside className="w-1/3 flex-row"> */}
          {/* <div className="flex flex-row justify-end w-1/4 h-auto">
            <img src="https://images.unsplash.com/photo-1503818454-2a008dc38d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="tall" />
            </aside> */}
          {/* </div> */}

        </section>
        <section className="bg-gray-200 w-full">
          <h4 className="font-bold my-8 mx-4 pt-8">PARTNERS</h4>
          <div className="w-1/2 my-8 flex content-start">

            <p className="mx-4 pb-8">
              NIELS CORFIELD / EDIBLE CITIES – Based in the south west, Niels
              Corfield is an agroecological educator and has been working closely
              with superland studio for a decade to deliver consulting services for
              productive and edible landscape design, as well as a variety of education resources in permaculture design practice.
              <a href="https://nielscorfield.com/" target="_blank" rel="noreferrer" className="italic"><br /> www.nielscorfield.com</a>
            </p>
            <div className="">
              <img className="" src="https://skatethestates.com/wp-content/uploads/2020/11/how-to-kickflip-on-a-skateboard-1.jpg" alt="" />
            </div>
          </div>
        </section>


        <section className="bg-gray-200 w-full flex">
          <div className="flex flex-row">
            <img className="" src="https://skatethestates.com/wp-content/uploads/2020/11/how-to-kickflip-on-a-skateboard-1.jpg" alt="" />
          </div>
          <div className="w-1/4 my-4 flex-row">
            <h4 className="font-bold my-4 mx-4 pt-4 flex content-end">What is Permaculture?</h4>
            <p className="mt-4 mx-4">
              Permaculture is a practical, holistic
              design approach to ecological living
              - observing how parts relate, how we
              use resources, connecting inputs and
              outputs, working with nature - we can
              develop long-term sustainable solutions.</p>
            <br />
            <p className="mx-4">
              When combining Architecture and Permaculture design, we create places that
              are both beautiful and abundant, and
              touch the earth lightly.
            </p>
          </div>
        </section>
        <section>
          <div className="w-full bg-gray-200 flex justify-center align-center my-4 py-8">
            <p className="text-sm  ml-8 mr-24">
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