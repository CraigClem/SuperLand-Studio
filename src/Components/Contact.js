import React from 'react';

function Contact() {
  return (
    <section className="bg-white w-full">
      {/* <div className="w-full justify-center align-middle mt-8">
        <p className="text-xl text-center text-gray-600">GET IN CONTACT</p>
      </div> */}
      <form name="contact" method="POST" action="https://formspree.io/f/mgerqrzp" className="flex justify-center">
        <div className="flex flex-col lg:my-16 m-8 lg:w-1/3 w-full border-2 border-grey-200 p-8">
          <label className="my-2">Name </label>
          <input name="name" type="text" required className="rounded-sm px-6 border-2 border-grey-200" />
          <label className="my-2">Email </label>
          <input name="email" type="text" required className="rounded-sm border-2 border-grey-200" />
          <label className="my-2">Message </label>
          <textarea name="message" type="text" required className="rounded-sm border-2 border-grey-200" />
          <button type="submit" className="border-2 border-grey-200 p-4 my-4 w-full lg:w-1/4">Send</button>
        </div>
      </form>
      <div className="w-full justify-center align-middle mt-2 lg:p-8 lg:mt-8">
        <p className="lg:text-3xl text-center text-gray-600">WEBSITE UNDER CONSTRUCTION…COMING SOON</p>
      </div>
    </section>

  )
}

export default Contact