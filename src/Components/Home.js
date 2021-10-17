import { Image, Transformation } from 'cloudinary-react'
import Header from './Header'

function Home() {
  return (
    <>
      <Header />
      <main className="h-full">
        <section className="lrg:grid grid-cols-3 gap-4 md:grid grid-cols-2 mx-8 my-4">
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="bedwell_lodge_editing_studio_z2z5mq">
              <Transformation aspectRatio="1.4" height="600" crop="scale" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="listed_conversion_chiswick_xcn8te">
              <Transformation aspectRatio="1.4" height="600" crop="scale" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="portishead_extension_y2qted">
              <Transformation aspectRatio="1.4" height="600" crop="scale" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="edible_garden_design_Kensington_copy_st1lw1">
              <Transformation aspectRatio="1.4" height="600" crop="scale" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="wildlife_area_sunflowers_tp1g4l">
              <Transformation aspectRatio="1.4" height="600" crop="scale" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="edible_cities">
              <Transformation aspectRatio="1.4" height="600" crop="scale" />
            </Image>
          </div>
          <div className="lg:py-0 sm:py-4">
            <Image cloudName="drevpwd0d" publicId="hoghton_chapel_listed_conversion_kibsmf">
              <Transformation aspectRatio="1.4" height="600" crop="scale" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="Chew_Magna_CIC_landscape_zrwnso">
              <Transformation aspectRatio="1.4" height="600" crop="scale" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="terrace_extension_garden_bristol_vs3kym">
              <Transformation aspectRatio="1.4" height="600" crop="scale" />
            </Image>
          </div>
        </section>

        <section className="bg-gray-200 w-full py-4 px-8">
          <div className="ml-14">
            <p className="text-white font-extrabold lg:text-3xl tracking-wide py-1">REGNERATIVE DESIGN</p>
            <p className="text-gray-400 font-extrabold lg:text-3xl py-1 tracking-wide">FOR BUILDINGS,</p>
            <p className="text-gray-400 font-extrabold lg:text-3xl py-1 tracking-wide">FOR LANDSCAPES,</p>
            <p className="text-gray-400 font-extrabold lg:text-3xl py-1 tracking-wide">FOR COMMUNITIES.</p>
          </div>
        </section>
        <section className="flex flex-row">

          <div className="w-1/3 ml-14 mt-14">
            <Image cloudName="drevpwd0d" publicId="bedwell_lodge_editing_studio_z2z5mq">
              <Transformation aspectRatio="1.4" height="600" crop="scale" />
            </Image>
          </div>

          <div className="flex flex-col w-2/3 mx-4 my-14 tracking-wide">
            <p className="flex font-bold pb-2">We specialise in residential and conservation projects, as well as community focused builds. </p>
            <p className="font-extrabold pb-2">Our designs help people transition to a more
              sustainable, carbon-free future.<span className="font-medium"> We focus on:</span></p>

            <ul className="ml-4 font-light">
              <li>maximum building and site performance</li>
              <li>low-energy</li>
              <li>healthy homes, buildings and ecosystems</li>
              <li>productive, ecological landscapes</li>
              <li>resilient communities</li>
            </ul>
            <p className="font-bold mt-4">Each project is site and client specific; we craft a uniquely personal solution to every one.</p>
          </div>

        </section>

      </main>
    </>
  )
}

export default Home