import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iqylzdi',
        'template_qwkf30a',
        form.current,
        '1AWR7O-C3BCy0miz5'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <>
      <div name="contact" className="w-full h-screen text-black p-4">
        <div
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6">Feel free to reach out and get in touch!</p>
          </div>

          <div className="flex justify-center items-center">
            <form action="" className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
              />
              <input
                type="text"
                name="name"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
              />
              <textarea
                name="message"
                rows="10"
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
              ></textarea>

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
