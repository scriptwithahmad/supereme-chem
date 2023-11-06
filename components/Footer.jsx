import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-gray-200 pt-8 pb-6">
        <div className="max-w-[1240px] mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="w-full lg:w-[70%]">
              <Link href={"/"}>
                <img
                  className="w-64 mb-5"
                  src="/images/logo.png"
                  alt="Img Here"
                />
              </Link>
              <p className="text-sm text-justify mb-3 line-clamp-3 text-neutral-600">
                Explore eco-friendly fertilizers for vibrant farms. Elevate
                plant health with our premium selection. Discover sustainable
                solutions for thriving green spaces
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
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
                      href="/our-story"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-neutral-600 hover:text-[color:var(--main-color)] block pb-2 text-sm"
                      href="/products"
                    >
                      Products & Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-neutral-600 hover:text-[color:var(--main-color)] block pb-2 text-sm"
                      href="/news"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-neutral-600 hover:text-[color:var(--main-color)] block pb-2 text-sm"
                      href="/contact"
                    >
                      Contact Us
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
