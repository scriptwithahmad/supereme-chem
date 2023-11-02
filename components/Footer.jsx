import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-gray-200 pt-8 pb-6">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="w-[70%]">
              <img
                className="w-52 mb-5"
                src="https://supreme-chem.com/images/logo.png"
                alt="Img Here"
              />
              <p className="text-sm text-justify mb-3 line-clamp-3 text-neutral-600">
                Explore eco-friendly fertilizers for vibrant gardens. Elevate
                plant health with our premium selection. Discover sustainable
                solutions for thriving green spaces
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="">
                <a className="block uppercase text-lg font-semibold mb-2 text-slate-950">
                  Useful Links
                </a>
                <ul>
                  <li>
                    <a
                      className="text-neutral-600 hover:text-[color:var(--main-color)] block pb-2 text-sm"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-neutral-600 hover:text-[color:var(--main-color)] block pb-2 text-sm"
                      href="#story"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-neutral-600 hover:text-[color:var(--main-color)] block pb-2 text-sm"
                      href="#service"
                    >
                      Products & Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-neutral-600 hover:text-[color:var(--main-color)] block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <div className="">
                <span className="block uppercase text-lg font-semibold mb-2 text-slate-950">
                  Join our newsletter
                </span>
                <p className="text-sm line-clamp-3 text-slate-700">
                  Subscribe to our newsletter for the latest insights and trends
                  in the fertilizer industry, boosting your agricultural
                  knowledge
                </p>
                <div className="flex items-center mt-2 gap-5">
                  <h2 className="font-semibold text-slate-950">Follow Us On</h2>
                  <Link
                    href="https://www.linkedin.com/company/supreme-chemical/"
                    target="_blank"
                    className="bg-blue-500 h-8 w-8 flex items-center justify-center text-xl rounded-lg text-white"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
