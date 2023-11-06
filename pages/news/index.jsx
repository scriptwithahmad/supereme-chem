import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      {/* News Letters */}
      <div className="px-4">
        <div className="py-20 max-w-[1200px] m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="mt-2 text-4xl font-inter font-extrabold tracking-tight text-slate-900">
                Join Our Newsletter
              </h2>
              <p className="mt-4 text-base leading-7 font-inter text-slate-700">
                Stay updated with Supreme Chemicals on LinkedIn for the latest
                fertilizer industry developments. Join our newsletter for
                valuable insights, company innovations, and sustainability
                solutions. Follow us on LinkedIn and subscribe today to stay at
                the forefront of fertilizer advancements. Connect with us for
                expert knowledge and news.
              </p>
              <Link target="_blank" href="https://www.linkedin.com/company/supreme-chemical/">
                <button className="mt-4 text-[color:var(--primary-color)] border border-[color:var(--primary-color)] px-4 py-1 rounded-lg hover:text-white hover:bg-[color:var(--primary-color)] transition duration-500">
                  Subscribe
                </button>
              </Link>
            </div>
            <div>
              <img className="rounded-lg" src="/images/linkdin.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
