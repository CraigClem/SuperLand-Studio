import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-400 w-full">
      <form name="contact" method="POST" action="https://formspree.io/f/mgerqrzp" className="flex justify-center">
        <div className="flex flex-col my-16 w-1/3">
          <label className="my-2">Name </label>
          <input name="name" type="text" required className="rounded-sm px-6" />
          <label className="my-2">Email </label>
          <input name="email" type="text" required className="rounded-sm" />
          <label className="my-2">Message </label>
          <textarea name="message" type="text" required className="rounded-sm" />
          <button type="submit" className="border-2 border-white my-4">Send</button>
        </div>
      </form>
    </section>

  )
}

export default Contact