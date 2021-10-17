import { Image, Transformation } from 'cloudinary-react'

function Header() {
  return (
    <div className="flex justify-center">
      <Image cloudName="drevpwd0d" publicId="SuperlandStudio_logo_2021_1_vauis4.jpg">
        <Transformation quality="100" />
      </Image>
    </div >
  )
}

export default Header