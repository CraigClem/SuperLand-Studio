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
          <div className="lg:py-4 py-4 flex justify-center">
            <Image cloudName="drevpwd0d" publicId="wildlife_area_sunflowers_FINAL_z1r5kj">
              <Transformation height="500" width="600" crop="fill" quality="100" />
            </Image>
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

        <section className="bg-gray-400 w-full h-96 py-96 my-2 flex align-middle">
          <div className="ml-14">
            <p className="text-white font-extrabold text-xl md:text-2xl lg:text-3xl tracking-wide py-1 lg:leading-10">REGNERATIVE DESIGN</p>
            <p className="text-gray-600 font-extrabold text-xl md:text-2xl lg:text-3xl py-1 tracking-wide lg:leading-10">FOR BUILDINGS,</p>
            <p className="text-gray-600 font-extrabold text-xl md:text-2xl lg:text-3xl py-1 tracking-wide lg:leading-10">FOR LANDSCAPES,</p>
            <p className="text-gray-600 font-extrabold text-xl md:text-2xl lg:text-3xl py-1 tracking-wide lg:leading-10">FOR COMMUNITIES.</p>
          </div>
        </section>

        <section className="grid grid-cols-2 w-full">

          <div className="mx-4 mt-2 mb-4 lg:ml-48">
            <Image cloudName="drevpwd0d" publicId="hands_in_soil_FINAL_d9lgrq">
              <Transformation height="250" width="300" crop="fill" quality="100" />
            </Image>
          </div>

          <div className="mx-4 my-2 tracking-wide text-xs lg:text-lg">
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