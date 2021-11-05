import { Image, Transformation } from 'cloudinary-react'
import Header from './Header'

function Home() {
  return (
    <>
      <Header />
      <main className="h-full">
        <section className="grid grid-cols-3 lg:grid lg:grid-cols-3 gap-4 md:grid grid-cols-2 mx-8 my-8">
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="bedwell_lodge_editing_studio_z2z5mq">
              <Transformation height="500" width="500" crop="fit" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="listed_conversion_chiswick_xcn8te">
              <Transformation height="500" width="500" crop="fit" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="portishead_extension_y2qted">
              <Transformation height="500" width="500" crop="fit" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="edible_garden_design_Kensington_copy_st1lw1">
              <Transformation height="500" width="500" crop="fit" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="wildlife_area_sunflowers_tp1g4l">
              <Transformation height="500" width="500" crop="fit" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="edible_cities">
              <Transformation height="500" width="500" crop="fit" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="hoghton_chapel_listed_conversion_kibsmf">
              <Transformation height="500" width="500" crop="fit" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="terrace_extension_garden_bristol_vs3kym">
              <Transformation height="500" width="500" crop="fit" />
            </Image>
          </div>
          <div className="lg:py-0 py-4">
            <Image cloudName="drevpwd0d" publicId="Chew_Magna_CIC_landscape_zrwnso">
              <Transformation height="500" width="500" crop="fit" />
            </Image>
          </div>
        </section>

        <section className="bg-gray-200 w-full h-96 py-4 my-6 flex align-middle">
          <div className="ml-14">
            <p className="text-white font-extrabold lg:text-3xl tracking-wide py-1">REGNERATIVE DESIGN</p>
            <p className="text-gray-400 font-extrabold lg:text-3xl py-1 tracking-wide">FOR BUILDINGS,</p>
            <p className="text-gray-400 font-extrabold lg:text-3xl py-1 tracking-wide">FOR LANDSCAPES,</p>
            <p className="text-gray-400 font-extrabold lg:text-3xl py-1 tracking-wide">FOR COMMUNITIES.</p>
          </div>
        </section>

        <section className="grid grid-cols-2 w-full">

          <div className="mx-4 my-4">
            <Image cloudName="drevpwd0d" publicId="bedwell_lodge_editing_studio_z2z5mq">
              <Transformation height="500" width="500" crop="fit" />
            </Image>
          </div>

          <div className="mx-4 my-2 tracking-wide text-xs lg:text-lg">
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