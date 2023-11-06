import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <>
      {/* Products */}
      <div className="max-w-[1200px] m-auto py-24 px-4">
        <h2 className="text-4xl mt-2 font-inter text-center font-extrabold tracking-tight text-slate-900">
          Our Products
        </h2>
        <div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            <div className="p-2 bg-[#EEEEEE] rounded-[20px]">
              <Link href={"/granularurea"}>
                <img
                  className="h-full p-4 w-full object-cover rounded-[30px]"
                  src="/images/g1.png"
                  alt="image here"
                />
              </Link>
            </div>
            <div className="p-2 bg-[#EEEEEE] rounded-[20px]">
              <Link href={"/prilledurea"}>
                <img
                  className="h-full p-4 w-full object-cover rounded-[30px]"
                  src="/images/p1.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="p-2 bg-[#EEEEEE] rounded-[20px]">
              <Link href={"/calciumammoniumnitrate"}>
                <img
                  className="h-full p-4 w-full object-cover rounded-[30px]"
                  src="/images/c1.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="max-w-[1200px] m-auto py-24 px-4">
        <h2 className="text-4xl mt-2 font-inter text-center font-extrabold tracking-tight text-slate-900">
          Our Services
        </h2>
        <div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mt-10">
            {/* Service Card 01  */}
            <div className="border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <div className="h-48 w-48">
                <img
                  className="h-full w-full object-cover rounded-[30px] mix-blend-multiply"
                  src="https://supreme-chem.com/images/services/cropselection.jpg"
                  alt=""
                />
              </div>
              <div className="px-4 mb-6">
                <h2 className="mb-2 text-xl font-semibold">Crop Selection</h2>
                <p className="text-sm text-justify">
                  Selecting the best crop for local conditions, market demand,
                  and sustainability is crucial for maximizing yield and
                  ensuring long-term success.
                </p>
              </div>
            </div>
            {/* Service Card 02  */}
            <div className="border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <div className="h-48 w-48">
                <img
                  className="h-full w-full object-cover rounded-[30px] mix-blend-multiply"
                  src="https://supreme-chem.com/images/services/soilmanagement.jpg"
                  alt=""
                />
              </div>
              <div className="px-4 mb-6">
                <h2 className="mb-2 text-xl font-semibold">Soil Management</h2>
                <p className="text-sm text-justify">
                  Optimize soil for higher yields, less erosion, and cost
                  savings. Boost fertility, structure, and nutrient efficiency
                  with our soil management.
                </p>
              </div>
            </div>
            {/* Service Card 03  */}
            <div className="border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <div className="h-48 w-48">
                <img
                  className="h-full w-full object-cover rounded-[30px] mix-blend-multiply"
                  src="https://supreme-chem.com/images/services/croprotation.jpg"
                  alt="alt"
                />
              </div>
              <div className="px-4 mb-6">
                <h2 className="mb-2 text-xl font-semibold">Crop Rotation</h2>
                <p className="text-sm text-justify">
                  Crop rotation, involving planting diverse crops across
                  seasons, has been pivotal in shaping modern farming.
                </p>
              </div>
            </div>
            {/* Service Card 04  */}
            <div className="border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <div className="h-48 w-48 p-3">
                <img
                  className="h-full w-full object-cover rounded-[30px] mix-blend-multiply"
                  src="/images/waterimg.jpeg"
                  alt="alt"
                />
              </div>
              <div className="px-4 mb-6">
                <h2 className="mb-2 text-xl font-semibold">Water Management</h2>
                <p className="text-sm text-justify">
                  Efficient water managing in agriculture is crucial, reducing
                  crop stress during flowering and fruiting, and mitigating
                  drought impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
