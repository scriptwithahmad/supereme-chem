import React from "react";

const Story = () => {
  return (
    <>
      <div className="max-w-[1250px] m-auto">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2 mx-12 mt-10">
          <div className="bg-[#2585C1] text-white rounded-3xl p-8">
            <img
              className="h-56 w-56 object-cover m-auto"
              src="https://supreme-chem.com/images/ourstory/mission.png"
              alt="img alter"
            />
            <div>
              <h1 className="mb-2 font-bold text-3xl">Who we are</h1>
              <p>
                Supreme Chemical, the foremost industry leader, excels in
                producing and supplying top-tier plant nutrients. Our
                fertilizers are tailored to address a wide range of crop needs
                and application methods. At Supreme Chemical, we hold our
                clients in the highest regard, viewing them as invaluable
                partners. Our dedicated team works tirelessly to unlock the
                maximum production potential for each and every one of our
                valued customers.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" bg-[#2585C1] text-white rounded-3xl p-8">
              <img
                alt="img alter"
                className="h-32 w-32 object-cover m-auto"
                src="https://supreme-chem.com/images/ourstory/Who.png"
              />
              <div>
                <h1 className="mb-2 font-bold text-3xl">Mission</h1>
                <p>
                  Our mission is to elevate every clients experience to unique &
                  beneficial partnership that help achieving your goals.
                </p>
              </div>
            </div>
            <div className="bg-[#2585C1] text-white rounded-3xl p-8">
              <img
                className="h-32 w-32 object-cover m-auto"
                src="https://supreme-chem.com/images/ourstory/vision.png"
                alt="img alter"
              />
              <div>
                <h1 className="mb-2 font-bold text-3xl">Vision</h1>
                <p>
                  Our ultimate vision & goal is to rise to a position of global
                  leadership in the production of supreme quality fertilizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards  */}
      <div className="max-w-[1250px] m-auto py-20 px-4">
        <p className="text-base text-center font-inter font-semibold leading-7 text-indigo-600">
          Our
        </p>
        <h2 className="text-4xl mt-2 font-inter text-center font-bold text-slate-900">
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
                src="/images/team.png"
                alt="Image Here"
              />
              <span className="text-xl font-semibold text-[color:var(--main-color)]">
                Teamwork
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Story  */}
      <div className="max-w-[1200px] m-auto px-6 mb-8">
        <h1 className="text-3xl text-center font-bold text-slate-950 mb-8">
          Our Partner in Success
        </h1>
        <div className="bg-[#EEEEEE] w-fit p-6 rounded-2xl">
          <img
            src="/images/partner.jpeg"
            alt="Image here"
            className="w-[180px] h-auto mix-blend-multiply"
          />
        </div>
      </div>
    </>
  );
};

export default Story;
