import React from "react";

const ProductCards = () => {
  return (
    <>
      <div id="service" className="max-w-[1200px] m-auto py-24 px-4">
        <p className="text-base text-center font-inter font-semibold leading-7 text-[color:var(--primary-color)]">
          Our
        </p>
        <h2 className="text-4xl mt-2 font-inter text-center font-extrabold tracking-tight text-slate-900">
          Products & Services
        </h2>
        <div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {/* Card 01 */}
            <div className="bg-[#EEEEEE] hover:bg-[#2585c136] rounded-lg">
              <div>
                <img
                  className="h-full w-full object-cover p-2 rounded-xl"
                  src="https://supreme-chem.com/images/home/fertilizers.jpg"
                  alt="Image Here"
                />
              </div>
              <div className="p-3">
                <h1 className="text-slate-900 text-2xl mb-2 font-semibold">
                  Fertilizers
                </h1>
                <p className="text-sm mb-3 line-clamp-3 text-slate-700">
                  Elevate your gardening with our eco- friendly fertilizers. Our
                  premium selection provides essential nutrients for vibrant,
                  healthy plants. Trust us for lush gardens.
                </p>
              </div>
            </div>
            {/* Card 02 */}
            <div className="bg-[#EEEEEE] hover:bg-[#3699503b] rounded-lg">
              <div>
                <img
                  className="h-full w-full object-cover p-2 rounded-xl"
                  src="https://agrilifetoday.tamu.edu/wp-content/uploads/2020/05/Gardening-AdobeStock_330341353.jpeg"
                  alt="Image Here"
                />
              </div>
              <div className="p-3">
                <h1 className="text-slate-900 text-2xl mb-2 font-semibold">
                  Gardening Fertilizers
                </h1>
                <p className="text-sm mb-3 line-clamp-3 text-slate-700">
                  Elevate your garden with our eco-conscious fertilizers.
                  Specially crafted to nourish your plants, our premium
                  selection guarantees a flourishing, vibrant garden. Rely on us
                  for sustainable, thriving green spaces.
                </p>
              </div>
            </div>
            {/* Card 03 */}
            <div className="bg-[#EEEEEE] hover:bg-[#2585c136] rounded-lg">
              <div>
                <img
                  className="h-full w-full object-cover p-2 rounded-xl"
                  src="https://supreme-chem.com/images/home/farm%20consultation.jpg"
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
