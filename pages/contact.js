import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SucessMessage = () => {
  return (
    <div className="alert alert-success" role="alert">
      Your message was sent successfully!
    </div>
  );
};

const contact = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ifhyzu9",
        "template_m9yvb77",
        form.current,
        "hdHOZVWeInVxG3_yi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSuccessMessage(true);
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pt-16 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <img
              className="absolute inset-0 w-full h-full"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
            ></img>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  Readle
                </h2>
                <p className="mt-1">
                  Learn and explore many things in Readle and connect with
                  millions of people.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-green-500 leading-relaxed">
                  example@email.com
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 shadow-md border p-10">
            <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font">
              Contact
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Please fill the form below to contact us.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="FullName"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Button
              </button>
              <div className="row">
                {successMessage ? <SucessMessage /> : null}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
