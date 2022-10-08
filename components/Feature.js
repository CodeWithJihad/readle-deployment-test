import React from "react";
import Link from "next/link";

const Feature = () => {
  return (
    <div>
      <div className="flex justify-between items-center transition-all">
        <div className=" py-10 md:py-24 px-5 xl:py-10 transition-all">
          <h1 className=" lg:mx-10 font-serif text-7xl md:text-9xl lg:text-8xl xl:text-9xl lg:max-w-2xl transition-all">
            Stay here and Read.
          </h1>
          <h2 className="lg:mx-10 my-6 text-2xl md:max-w-2xl transition-all">
            Learn and explore many things in Readle and connect with millions of
            people.
          </h2>
          <Link href="/about">
            <a>
              <button className="bg-green-500 p-5 text-2xl text-white w-52 md:w-56 rounded-md lg:mx-10 hover:bg-transparent hover:text-green-500 hover:border-2 hover:border-green-500 transition-all">
                Read Readle
              </button>
            </a>
          </Link>
        </div>
        <img
          className=" hidden lg:block object-contain w-2/6 2xl:my-5 mx-10 transition-all"
          src="/123.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Feature;
