import React from 'react';

function Contact() {
  return (
    <section className="bg-white w-full">
      <div className="w-full justify-center align-middle mt-8">
        <p className="text-xl text-center text-gray-600">GET IN CONTACT</p>
      </div>
      <form name="contact" method="POST" action="https://formspree.io/f/mgerqrzp" className="flex justify-center">
        <div className="flex flex-col my-16 w-1/3 border-2 border-grey-200 p-8">
          <label className="my-2">Name </label>
          <input name="name" type="text" required className="rounded-sm px-6 border-2 border-grey-200" />
          <label className="my-2">Email </label>
          <input name="email" type="text" required className="rounded-sm border-2 border-grey-200" />
          <label className="my-2">Message </label>
          <textarea name="message" type="text" required className="rounded-sm border-2 border-grey-200" />
          <button type="submit" className="border-2 border-grey-200 p-4 my-4 w-1/4">Send</button>
        </div>
      </form>
      <div className="w-full justify-center align-middle p-8 mt-8">
        <p className="text-3xl text-center text-gray-600">WEBSITE UNDER CONSTRUCTION…COMING SOON</p>
      </div>
    </section>

  )
}

export default Contact