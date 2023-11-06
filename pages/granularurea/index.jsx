import React from "react";

const index = () => {
  // TABLE HEADER
  const tableHeader = [
    { lable: "Name", align: "left" },
    { lable: "Value", align: "left" },
  ];
  // TABLE HEADER
  const tableData = [
    { title: "Total Nitrogen (N), min", data: "≥ 46.2%" },
    { title: "Biuret, max", data: "1%" },
    { title: "Moisture, max	", data: "0.5%" },
    { title: "Formaldehyde (HCHO)	", data: "≥ 0.45%" },
    { title: "Friability", data: "100%" },
    { title: "Free Ammonia", data: "60-100 ppm" },
  ];

  return (
    <>
      {/* main  */}
      <div className="px-4">
        <div className="py-20 max-w-[1200px] m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="mt-2 text-4xl font-inter font-semibold text-slate-900">
                Granular Urea
              </h2>
              <p className="mt-4 text-base leading-7 font-inter text-slate-700 text-justify">
                Granular urea is a highly regarded solid nitrogen fertilizer,
                prized for its small, uniform white crystals. What sets it apart
                is its remarkable nitrogen concentration, making it a
                cornerstone for promoting robust plant growth. Beyond its visual
                appeal, the uniform granules offer practical advantages in
                agriculture. The consistency in granule size ensures precise and
                efficient distribution, reducing the risk of nitrogen loss
                through processes like volatilization or leaching.
              </p>
            </div>
            <div className="grid grid-cols-3 items-end gap-4">
              <div className="w-full h-[70%]">
                <img
                  className="w-full h-full object-contain"
                  src="/images/f2.png"
                  alt="Image Here"
                />
              </div>
              <div className="w-full h-[80%]">
                <img
                  className="w-full h-full object-contain"
                  src="/images/f2.png"
                  alt="Image Here"
                />
              </div>
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-contain"
                  src="/images/f2.png"
                  alt="Image Here"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1200px] m-auto mb-12 px-6 lg:py-0">
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
            className="w-28 mix-blend-multiply p-4"
            src="/images/img2.jpeg"
            alt="Image Alt"
          />
          <h1 className="text-[color:var(--main-color)]">
            Improved for better spreading
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
