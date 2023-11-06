import React from "react";

const ProductCards = () => {
  return (
    <>
      <div id="service" className="max-w-[1200px] m-auto py-24 px-4">
        <p className="text-base text-center font-inter font-semibold leading-7 text-[color:var(--primary-color)]">
          Our
        </p>
        <h2 className="text-4xl mt-2 font-inter text-center font-bold text-slate-900">
          Products & Services
        </h2>
        <div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {/* Card 01 */}
            <div className="bg-[#EEEEEE] hover:bg-[#2585c136] rounded-lg">
              <div>
                <img
                  className="h-full w-full object-cover p-2 rounded-xl"
                  src="/images/fertilizers.jpeg"
                  alt="Image Here"
                />
              </div>
              <div className="p-3">
                <h1 className="text-slate-900 text-2xl mb-2 font-semibold">
                  Fertilizers
                </h1>
                <p className="text-sm mb-3 line-clamp-3 text-slate-700">
                  Elevate your farming with our eco- friendly fertilizers. Our
                  premium selection provides essential nutrients for vibrant,
                  healthy plants. Trust us for lush farms.
                </p>
              </div>
            </div>
            {/* Card 02 */}
            <div className="bg-[#3699503b] rounded-lg">
              <div className="p-3">
                <h1 className="text-slate-900 text-4xl my-4 text-center mb-4 font-semibold">
                  Who we are
                </h1>
                <p className="text-base mb-2 text-slate-700">
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
            {/* Card 03 */}
            <div className="bg-[#EEEEEE] hover:bg-[#2585c136] rounded-lg">
              <div>
                <img
                  className="h-full w-full object-cover p-2 rounded-xl"
                  src="/images/farm.jpeg"
                  alt="Image Here"
                />
              </div>
              <div className="p-3">
                <h1 className="text-slate-900 text-2xl mb-2 font-semibold">
                  Farm Consultation
                </h1>
                <p className="text-sm mb-3 line-clamp-3 text-slate-700">
                  Explore our extensive range of cutting-edge agricultural
                  innovations designed to elevate your farm's productivity and
                  propel it into the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
