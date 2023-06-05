import React from 'react';

export default function Contact() {
  return (
    <>
      <div>
        <div>
          <div>
            <p>Contact</p>
            <p>Feel free to reach out and get in touch!</p>
          </div>

          <div>
            <form action="">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="name"
                placeholder="Enter your email"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
