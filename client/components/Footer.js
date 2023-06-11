import React from 'react';

export default function Footer() {
  return (
    <div name="footer" className="pt-10 flex flex-col items-center">
      <div className="text-center text-md">
        Built and Designed by{' '}
        <a
          href="https://github.com/malcolmlearnstech"
          className="hover:underline"
        >
          Malcolm M
        </a>
      </div>
    </div>
  );
}
