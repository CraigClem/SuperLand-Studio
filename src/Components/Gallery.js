import React from 'react';
import ImageGrid from './ImageGrid'

function Gallery() {
  return (
    <main className="h-full">
      <div className="ml-4">
        <h1 className="font-extrabold text-6xl ml-4 my-8">GALLERY</h1>
        <h1 className="ml-4 text-2xl">ARCHITECTURE</h1>
        <ImageGrid />
        <h1 className="ml-4 text-2xl">PERMACULTURE</h1>
        <ImageGrid />
      </div>

    </main>
  )
}

export default Gallery