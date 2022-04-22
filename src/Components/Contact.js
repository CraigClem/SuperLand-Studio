import React from 'react';
import Header from './Header'

function Contact() {
  return (
    <section className="bg-white w-full h-full">
      <Header />
      {/* <div className="w-full justify-center align-middle mt-8">
        <p className="text-xl text-center text-black lg:text-2xl">Say Hello...</p>
      </div> */}
      <form name="contact" method="POST" action="https://formspree.io/f/mgerqrzp" className="flex justify-center text-black lg:text-xl">
        <div className="flex flex-col lg:my-16 m-8 lg:w-1/3 w-full border-4 border-grey-200 rounded-lg p-8">
          <label className="my-2">Name </label>
          <input name="name" type="text" required className="rounded-md px-6 border-4 border-grey-200 lg:h-16" />
          <label className="my-2">Email </label>
          <input name="email" type="text" required className="rounded-md border-4 border-grey-200 lg:h-16" />
          <label className="my-2">Message </label>
          <textarea name="message" type="text" required className="rounded-md border-4 border-grey-200 lg:h-36" />
          <div className="flex justify-center">
            <button type="submit" className="border-2 border-grey-200 rounded-md p-4 my-4 w-full lg:w-1/4 lg:justify-center lg:text-xl bg-gray-300 hover:bg-gray-500 hover:text-white">Send</button>
          </div>
        </div>
      </form>
      {/* <div className="w-full justify-center align-middle mt-2 lg:p-8 lg:mt-8">
        <p className="lg:text-3xl text-center text-gray-600">WEBSITE UNDER CONSTRUCTION…COMING SOON</p>
      </div> */}
    </section>

  )
}

export default Contact