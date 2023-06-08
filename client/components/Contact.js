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
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact Me
            </p>
            <p className="py-6">Feel free to reach out and get in touch!</p>
          </div>

          <div>
            <div className="flex flex-wrap">
              <div className="md:w-3/5">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  action=""
                  className="flex flex-col"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                  />
                  <textarea
                    name="message"
                    rows="10"
                    placeholder="Enter your message"
                    className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mr-auto flex items-center rounded-md hover:scale-110 duration-300"
                  >
                    Let's Talk
                  </button>
                </form>
              </div>

              <div className="md:w-2/5 flex justify-end item">
                Test Text to show on right side
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
