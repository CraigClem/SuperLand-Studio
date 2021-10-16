import React from 'react';
import Header from './Header'

function PermaCulture() {
  return (
    <>
      <Header />
      <div className="flex-row mx-4 my-4">
        <div className="inline-flex 1/4">
          <img align="left" src="https://media.istockphoto.com/photos/leek-harvest-picture-id1255225875?b=1&k=20&m=1255225875&s=170667a&w=0&h=SvAUAuUZQ3wu7jdWDJ-HXdx_ZN181cN_UAew9SldSh8=" alt="permaculture" />
        </div>
        <div className="flex-row ml-4 w-3/4">
          <p className="font-bold">What is PermaCulture?</p>
          <p className="">Permaculture is a practical, holistic design approach to ecological
            living - observing how parts relate, how we use resources, connecting inputs and outputs, working with nature - we can develop
            long-term sustainable solutions. </p>
          <br />
          <p>When combining Architecture and Permaculture design, we create
            places that are both beautiful and abundant, and touch the earth
            lightly.</p>
        </div>
      </div>
    </>
  )
}

export default PermaCulture