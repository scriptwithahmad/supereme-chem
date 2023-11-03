import React from "react";

const index = () => {
  // TABLE HEADER
  const tableHeader = [
    { lable: "Name", align: "left" },
    { lable: "Value", align: "left" },
  ];
  // TABLE HEADER
  const tableData = [
    { title: "Appearance", data: "Greyish-white granules" },
    { title: "Total Nitrogen (N), max", data: "27%" },
    { title: "Nitric N(N-N03), max", data: "13.5%" },
    { title: "Ammoniacal N, max", data: "13.5%" },
    { title: "Moisture, max	", data: "≥ 0.45%" },
    { title: "Granulometric Composition:under 1 mm, max.", data: "1%" },
    { title: "3.15-4 mm, min", data: "25%" },
    { title: "2-5 mm, min", data: "95%" },
    { title: "under 6.3 mm", data: "100%" },
    { title: "Granule static strength, min	", data: "3 MPa" },
    { title: "Free Flowing", data: "100%" },
  ];

  return (
    <>
      {/* main  */}
      <div className="px-4">
        <div className="py-20 max-w-[1200px] m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h2 className="mt-2 text-4xl font-inter font-semibold text-slate-900">
                Calcium Ammonium Nitrate
              </h2>
              <p className="mt-4 text-base leading-7 font-inter text-slate-700 text-justify">
                This innovative fertilizer leverages fast-release nitrogen and
                calcium to boost soil strength while maintaining optimal pH
                levels. The balanced blend of ammoniacal and nitric nitrogen
                fosters sustainable plant nutrition, leading to enhanced root
                strength and heightened pest resistance. Its versatility extends
                to a wide array of crops and soil types, making it a valuable
                choice for agricultural applications.
              </p>
            </div>
            <div className="grid grid-cols-3 items-end gap-4">
              <div className="w-full h-[70%]">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/images/f1.png"
                  alt="Image Here"
                />
              </div>
              <div className="w-full h-[80%]">
                <img
                  className="w-full h-full rounded-lg"
                  src="/images/f1.png"
                  alt="Image Here"
                />
              </div>
              <div className="w-full h-full">
                <img
                  className="w-full h-full rounded-lg"
                  src="/images/f1.png"
                  alt="Image Here"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1200px] m-auto mb-12">
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
            src="/images/img2.jpeg"
            alt="Image Alt"
          />
          <h1 className="text-[color:var(--main-color)]">
            Improved for better spreading
          </h1>
        </div>
      </div>
      {/* Table  */}
      <div class="relative min-w-[500px] max-w-[1200px] m-auto overflow-x-auto mb-8">
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
    </>
  );
};

export default index;
