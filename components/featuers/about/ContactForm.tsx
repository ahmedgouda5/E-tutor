/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";

const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  items-start min-h-screen bg-white">
      <div className=" hidden md:flex flex-col justify-center  px-10 md:px-24 gap-10">
        <div>
          <p className="text-gray-700 leading-relaxed text-lg">
            Will you be in Los Angeles or any other branches any time soon? Stop
            by the office! We&lsquo;d love to meet.
          </p>
        </div>

        <div className="flex flex-col gap-8 text-gray-700">
          <div className="flex items-start gap-6">
            <h3 className="text-orange-600 text-sm font-semibold  w-32">
              ADDRESS
            </h3>
            <div>
              <p>1702 Olympic Boulevard</p>
              <p>Santa Monica, CA 90404</p>
            </div>      
          </div>

          <div className="flex items-start gap-6">
            <h3 className="text-orange-600 text-sm font-semibold  w-32">
              PHONE NUMBER
            </h3>
            <div>
              <p>(480) 555-0103</p>
              <p>(219) 555-0114</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <h3 className="text-orange-600 text-sm font-semibold  w-32">
              EMAIL ADDRESS
            </h3>
            <div>
              <p>help.eduguard@gmail.com</p>
              <p>career.eduguard@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — Contact Form */}
      <div className="flex items-center justify-center px-5 py-16 shadow-2xl rounded-2xl">
        <form className="w-full max-w-xl flex flex-col gap-6 bg-white" onSubmit={(e)=>{e.preventDefault}}>
          <h2 className="text-3xl font-semibold mb-1">Get In touch</h2>
          <p className="text-gray-500 -mt-4">
            Feel free to contact us, we love to make new partners & friends
          </p>

          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="First name..."
              className="p-3 border rounded-lg w-full"
            />
            <input
              placeholder="Last name..."
              className="p-3 border rounded-lg w-full"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border rounded-lg w-full"
          />

          <input
            placeholder="Message Subject"
            className="p-3 border rounded-lg w-full"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="p-3 border rounded-lg w-full"
          />

          <button
            type="submit"
            className="bg-orange-500 text-white p-3 rounded-lg w-full mt-1 hover:bg-orange-600 transition"
          >
            Send Message →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
