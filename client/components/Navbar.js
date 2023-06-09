import React from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link as ScrollLink } from 'react-scroll';

const navigation = [
  { name: 'Home', href: 'home', current: true },
  { name: 'About Me', href: 'about', current: false },
  { name: 'Skills', href: 'skills', current: false },
  { name: 'Projects', href: 'projects', current: false },
  { name: 'Contact', href: 'contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  //console.log(Disclosure);
  return (
    <div className="sticky top-0 z-10">
      <Disclosure as="nav" className="bg-sky-950">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 bg-red-400 items-center justify-center">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="absolute bg-blue-300 inset-y-0 w-4/5 flex justify-center items-center sm:static sm:inset-auto sm:m-auto sm:pr-0">
                  <div className="hidden sm:mr-6 sm:block">
                    <div className="flex flex-nowrap space-x-20 leading-loose sm:m-auto">
                      {navigation.map((item) => (
                        <ScrollLink
                          key={item.name}
                          to={item.href}
                          smooth
                          duration={500}
                          offset={-80}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white font-serif'
                              : 'text-gray-300 hover:bg-teal-300 hover:text-white hover:scale-105 duration-150 font-serif',
                            'rounded-md px-3 py-2 text-xl font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </ScrollLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
