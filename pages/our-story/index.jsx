import React from "react";

const Story = () => {
  return (
    <>
      <div className="max-w-[1200px] m-auto py-24 px-4">
        <p className="text-base text-center font-inter font-semibold leading-7 text-indigo-600">
          Our
        </p>
        <h2 className="text-4xl mt-2 font-inter text-center font-extrabold tracking-tight text-slate-900">
          Core Values
        </h2>
        <div>
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mt-10">
            <div className="p-8 group flex flex-col items-center gap-2">
              <img
                className="h-full w-full object-contain bg-[#EEEEEE] group-hover:bg-[color:var(--card-bg)] rounded-[30px] p-6"
                src="/images/Integrity.png"
                alt="Img Here"
              />
              <span className="text-xl font-semibold text-[color:var(--main-color)]">
                Integrity
              </span>
            </div>
            <div className="p-8 group flex flex-col items-center gap-2">
              <img
                className="h-full w-full object-contain bg-[#EEEEEE] group-hover:bg-[color:var(--card-bg)] rounded-[30px] p-6"
                src="/images/Accountability.png"
                alt="Image here"
              />
              <span className="text-xl font-semibold text-[color:var(--main-color)]">
                Accountability
              </span>
            </div>
            <div className="p-8 group flex flex-col items-center gap-2">
              <img
                className="h-full w-full object-contain bg-[#EEEEEE] group-hover:bg-[color:var(--card-bg)] rounded-[30px] p-6"
                src="/images/Quality.png"
                alt="Image here"
              />
              <span className="text-xl font-semibold text-[color:var(--main-color)]">
                Quality
              </span>
            </div>
            <div className="p-8 group flex flex-col items-center gap-2">
              <img
                className="h-full w-full object-contain bg-[#EEEEEE] group-hover:bg-[color:var(--card-bg)] rounded-[30px] p-6"
                src="/images/Teamwork.png"
                alt="Image Here"
              />
              <span className="text-xl font-semibold text-[color:var(--main-color)]">
                Teamwork
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
