import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const Header = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className="flex justify-between items-center py-8 border-b border-gray-200">
        <h1 className="font-Poppins font-semibold text-4xl text-gray-800 ml-8">
          <Link href="/"> READLE </Link>
        </h1>

        <ul className="flex text-lg font-Poppins">
          <li className="mr-8 cursor-pointer hidden md:inline-block">
            <Link href="/"> Dashboard </Link>
          </li>
          {/* <li className=" mr-8 cursor-pointer hidden md:inline-block">
            <Link href=""> Collection </Link>
          </li> */}
          <li className="mr-8 cursor-pointer hidden md:inline-block">
            <Link href="/about"> About us </Link>
          </li>
          <li className=" mr-8 cursor-pointer hidden md:inline-block">
            <Link href="/contact"> Contact </Link>
          </li>
        </ul>
        <Menu as="div" className="relative inline-block text-left mr-10">
          <div>
            <Menu.Button className=" block md:hidden  w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Menu
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-lg font-Poppins cursor-pointer"
                      )}
                    >
                      <Link href="/">Dashboard </Link>
                    </div>
                  )}
                </Menu.Item>
{/*  <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-lg font-Poppins cursor-pointer"
                      )}
                    >
                      <Link href="">Collection </Link>
                    </div>
                  )}
                </Menu.Item> */}
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-lg font-Poppins cursor-pointer"
                      )}
                    >
                      <Link href="/about">About us </Link>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-lg font-Poppins cursor-pointer"
                      )}
                    >
                      <Link href="/contact">Contact </Link>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
