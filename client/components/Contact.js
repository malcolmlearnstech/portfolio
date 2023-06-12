import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const socialContacts = [
    {
      id: 1,
      logo: <FaLinkedinIn size={50} />,
      link: 'https://www.linkedin.com/in/malcolmrm/',
    },
    {
      id: 2,
      logo: <FaGithub size={50} />,
      link: 'https://github.com/malcolmlearnstech',
    },
    {
      id: 3,
      logo: <FaTwitter size={50} />,
      link: 'https://twitter.com/mrmlearnstech',
    },
  ];

  const openSocialLink = (link) => {
    window.open(link, '_blank');
  };

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
      <div
        name="contact"
        className="w-full md:h-screen text-black p-4 mt-20 md:mt-0"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-black">
              Contact Me
            </p>
            <p className="pt-4 pb-10">
              Feel free to reach out and get in touch!
            </p>
          </div>

          <div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
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

                  <div className="flex mx-auto md:ml-0">
                    <button
                      type="submit"
                      className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-10 flex rounded-md hover:scale-110 duration-300"
                    >
                      Let's Talk
                    </button>
                  </div>
                </form>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center items-center pt-24 md:items-end">
                {/* <div>Test Text to show on right side</div> */}
                <div className="flex justify-center items-center space-x-20 pb-40">
                  {socialContacts.map(({ id, logo, link }) => (
                    <button
                      key={id}
                      onClick={() => openSocialLink(link)}
                      className="hover:scale-110 duration-500"
                    >
                      {logo}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
