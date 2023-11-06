import React from "react";

const index = () => {
  // TABLE HEADER
  const tableHeader = [
    { lable: "Name", align: "left" },
    { lable: "Value", align: "left" },
  ];
  // TABLE HEADER
  const tableData = [
    { title: "Appearance", data: "White Prills" },
    { title: "Total nitrogen (N), min", data: "46.2%" },
    { title: "Biuret, max", data: "1%" },
    { title: "Moisture, max", data: "≥ 0.3%" },
    { title: "under 1 mm, max", data: "3%" },
    { title: "under 6 mm", data: "100%" },
    {
      title: "Granule static strength of granules, min",
      data: "0.7 kgF/granule",
    },
    { title: "Friability", data: "100%" },
  ];

  return (
    <>
      {/* main  */}
      <div className="px-4">
        <div className="py-20 max-w-[1200px] m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h2 className="mt-2 text-4xl font-inter font-semibold text-slate-900">
                Prilled Urea
              </h2>
              <p className="mt-4 text-base leading-7 font-inter text-slate-700 text-justify">
                Prilled urea, a high-nitrogen fertilizer with over 46% nitrogen
                content, is renowned for its uniform spherical prills. Its
                exceptional 100% water solubility makes it an optimal choice for
                irrigation and foliar fertilization. This versatile fertilizer
                also plays a crucial role in NPK fertilizer production,
                contributing significantly to agricultural and horticultural
                practices, resulting in improved crop yields and enhanced plant
                health.
              </p>
            </div>
            <div className="grid grid-cols-3 items-end gap-4">
              <div className="w-full h-[70%]">
                <img
                  className="w-full h-full object-contain"
                  src="/images/f3.png"
                  alt="Image Here"
                />
              </div>
              <div className="w-full h-[80%]">
                <img
                  className="w-full h-full object-contain"
                  src="/images/f3.png"
                  alt="Image Here"
                />
              </div>
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-contain"
                  src="/images/f3.png"
                  alt="Image Here"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] m-auto mb-12">
        <div className="flex items-center bg-[#eeeeeead] rounded-lg hover:bg-[#eee]">
          <img
            className="w-20 mix-blend-multiply p-4"
            src="/images/img1.jpeg"
            alt="Image Alt"
          />
          <h1 className="text-[color:var(--main-color)]">
            Suitable for production in blends
          </h1>
        </div>
        <div className="flex items-center bg-[#eeeeeead] rounded-lg hover:bg-[#eee]">
          <img
            className="w-28 mix-blend-multiply px-4"
            src="https://supreme-chem.com/images/products/foiler.png"
            alt="Image Alt"
          />
          <h1 className="text-[color:var(--main-color)]">
            Suitable for foliar application
          </h1>
        </div>
        <div className="flex items-center bg-[#eeeeeead] rounded-lg hover:bg-[#eee]">
          <img
            className="w-24 mix-blend-multiply px-4"
            src="https://supreme-chem.com/images/products/irrigation.png"
            alt="Image Alt"
          />
          <h1 className="text-[color:var(--main-color)]">
            Suitable for irrigation systems
          </h1>
        </div>
      </div>
      {/* Table  */}
      <div class="relative min-w-[370px] max-w-[1200px] m-auto overflow-x-auto mb-8 px-4">
        <table class="w-full text-sm text-left text-gray-500 border">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              {tableHeader.map((value, index) => {
                return (
                  <th
                    scope="col"
                    key={index}
                    className={`px-6 py-3 text-${value.align}`}
                  >
                    {value.lable}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((v, i) => {
              return (
                <tr class="bg-white border-b" key={i}>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {v.title}
                  </th>
                  <td class="px-6 py-4">{v.data}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="bg-[url('/images/overlay.png')] h-screen w-[500px] bg-no-repeat opacity-[.3] lg:opacity-100 absolute -top-[360px] -z-10 -right-[0px] rotate-180"></div>
    </>
  );
};

export default index;
