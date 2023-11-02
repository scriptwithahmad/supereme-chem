import React from "react";

const Hero = () => {
  return (
    <>
      <div className="px-4">
        <div className="py-20 max-w-[1200px] m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <p className="text-base font-semibold leading-7 text-[color:var(--primary-color)]">
                About
              </p>
              <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
                The Finest Yield
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                We prioritize quality and productivity on our clients' farms
                through crop selection optimization and advanced soil
                management. Our commitment to agricultural innovation keeps us
                at the forefront of industry advancements, ensuring we apply
                cutting-edge technologies for increased farm productivity. With
                our client-centric approach and precision farming solutions, we
                aim to maximize crop yields sustainably.
              </p>
          <button className='mt-4 text-[color:var(--primary-color)] border border-[color:var(--primary-color)] px-4 py-1 rounded-lg hover:text-white hover:bg-[color:var(--primary-color)] transition duration-500'>Contact Us</button>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://img2.chinadaily.com.cn/images/201805/14/5af92ef7a3103f68b65ae108.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
