import { Image, Transformation } from 'cloudinary-react'
import Header from './Header'
import Contact from './Contact'

function Home() {
  return (
    <>
      <Header />
      <main className="h-full w-full">
        <section className="lrg:grid lg:grid-cols-3 gap-4 mx-4 my-4 md:grid md:grid-cols-2">
          <div className="lg:py-4 py-4 flex justify-center">
            <Image cloudName="drevpwd0d" publicId="bedwell_lodge_editing_studio_FINAL_kppnfb">
              <Transformation height="500" width="600" crop="fill" quality="100" />
            </Image>
          </div>
          <div className="lg:py-4 py-4 flex justify-center">
            <Image cloudName="drevpwd0d" publicId="listed_conversion_chiswick_FINAL_klvdql">
              <Transformation height="500" width="600" crop="fill" quality="100" />
            </Image>
          </div>
          <div className="lg:py-4 py-4 flex justify-center">
            <Image cloudName="drevpwd0d" publicId="portishead_extension_FINAL_qbmwv6">
              <Transformation height="500" width="600" crop="fill" quality="100" />
            </Image>
          </div>
          <div className="lg:py-4 py-4 flex justify-center">
            <Image cloudName="drevpwd0d" publicId="edible_garden_design_Kensington_2_knm65d">
              <Transformation height="500" width="600" crop="fill" quality="100" />
            </Image>
          </div>
          <div className="text-img lg:py-4 py-4 flex justify-center align-middle">
            <p className="lg:flex lg:flex-col text-center m-8 lg:text-2xl"><span className="font-bold">Superland studio</span> connects architecture with ecosystem design. <span className="font-bold"> We create productive, low impact, beautiful buildings and landscapes.</span></p>
          </div>
          <div className="lg:py-4 py-4 flex justify-center">
            <Image cloudName="drevpwd0d" publicId="edible_cities_full_graphic_2_maagud">
              <Transformation height="500" width="600" crop="fill" quality="100" />
            </Image>
          </div>
          <div className="lg:py-4 py-4 flex justify-center">
            <Image cloudName="drevpwd0d" publicId="hoghton_chapel_listed_conversion_FINAL_c1sdif">
              <Transformation height="500" width="600" crop="fill" quality="100" />
            </Image>

          </div>
          <div className="lg:py-0 py-4 flex justify-center">
            <Image className="" cloudName="drevpwd0d" publicId="Chew_Magna_CIC_landscape_FINAL_ae4mwf">
              <Transformation height="500" width="600" crop="fill" quality="100" />
            </Image>
          </div>
          <div className="lg:py-0 py-4 flex justify-center">
            <Image className="" cloudName="drevpwd0d" publicId="terrace_extension_garden_bristol_FINAL_rhpjbv">
              <Transformation height="500" width="600" crop="fill" quality="100" />
            </Image>
          </div>
        </section>

        <section className="bg-gray-300 w-full h-screen lg:h-screen my-2 flex align-middle">
          <div className="ml-14">
            <p className="text-white font-extrabold text-xl  lg:text-6xl tracking-wide py-1 lg:leading-10 lg:mb-8">REGENERATIVE DESIGN:</p>
            <br />
            <p className="text-gray-600 font-extrabold text-xl  lg:text-6xl py-1 tracking-wide lg:leading-10 lg:my-8">FOR BUILDINGS,</p>
            <br />
            <p className="text-gray-600 font-extrabold text-xl  lg:text-6xl py-1 tracking-wide lg:leading-10 lg:my-8">FOR LANDSCAPES,</p>
            <br />
            <p className="text-gray-600 font-extrabold text-xl lg:text-6xl py-1 tracking-wide lg:leading-10 lg:my-8">FOR COMMUNITIES.</p>
          </div>
        </section>

        <section className="grid grid-cols-2 w-full lg:h-screen mt-8">

          <div className="mx-4 lg:w-full lg:h-sreen lg:mx-4 lg:mt-2 lg:mb-4 sarah-main-img">
            {/* <Image cloudName="drevpwd0d" publicId="Sarah_photo_b_w_w5xzx4.jpg" >
            </Image> */}
          </div>

          <div className="lg:mx-12 lg:my-2 lg:px-8 tracking-wide text-xs md:text-xl lg:text-2xl mx-6">
            <p className="flex pb-2">We specialise in residential and conservation projects, as well as community focused builds. </p>
            <p className="font-bold pb-2">Our designs help people transition to a more
              sustainable, carbon-free future. We focus on:</p>

            <ul className="ml-4 font-light">
              <li>maximum building and site performance</li>
              <li>low-energy</li>
              <li>healthy homes, buildings and ecosystems</li>
              <li>productive, ecological landscapes</li>
              <li>resilient communities</li>
            </ul>
            <p className="mt-4">Each project is site and client specific; we craft a uniquely personal solution to every one.</p>
          </div>

        </section>
      </main>
      <Contact />
    </>
  )
}

export default Home