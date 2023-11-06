import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="max-w-[1200px] m-auto py-24 px-4">
        <h2 className="text-4xl mt-2 font-inter text-center font-bold text-slate-900">
          Contact Us
        </h2>
        <div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {/* Card 01  */}
            <div className="border rounded-lg border-gray-200 hover:border-gray-200 hover:bg-[#eeeeee80] transition duration-300 py-2">
              <div>
                <img
                  className="h-full p-4 w-full object-cover rounded-[30px] mix-blend-multiply"
                  src="/images/info.png"
                  alt="image here"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-xl text-[#3C9553] font-bold">
                  Chief Executive Officer
                </h1>
                <div className="flex items-center justify-center gap-3 my-4">
                  <i className="fa-solid fa-envelope text-[#7fc081]"></i>
                  <span className="text-[#7fc081]">CEO@supremechem.info</span>
                </div>
              </div>
            </div>
            {/* Card 02  */}
            <div className="border rounded-lg border-gray-200 hover:border-gray-200 hover:bg-[#eeeeee80] transition duration-300 py-2">
              <div>
                <img
                  className="h-full p-4 w-full object-cover rounded-[30px] mix-blend-multiply"
                  src="/images/info.png"
                  alt="image here"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-xl text-[#3C9553] font-bold">
                  Sales Manager
                </h1>
                <div className="flex items-center justify-center gap-3 my-4">
                  <i className="fa-solid fa-envelope text-[#7fc081]"></i>
                  <span className="text-[#7fc081]">Sales@supremechem.info</span>
                </div>
              </div>
            </div>
            {/* Card 03  */}
            <div className="border rounded-lg border-gray-200 hover:border-gray-200 hover:bg-[#eeeeee80] transition duration-300 py-2">
              <div>
                <img
                  className="h-full p-4 w-full object-cover rounded-[30px] mix-blend-multiply"
                  src="/images/info.png"
                  alt="image here"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-xl text-[#3C9553] font-bold">
                  Customer Support
                </h1>
                <div className="flex items-center justify-center gap-3 my-4">
                  <i className="fa-solid fa-envelope text-[#7fc081]"></i>
                  <span className="text-[#7fc081]">Info@supremechem.info</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
