import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    if (showNav) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "visible";
    }
  }, [showNav]);

  const navLinks = [
    { text: "Home", route: "/" },
    { text: "Our Story", route: "/our-story" },
    { text: "Products & Services", route: "/products" },
    { text: "News", route: "/news" },
  ];

  const router = useRouter();

  return (
    <>
      <nav className="bg-white border-gray-200 shadow-sm sticky top-0 px-4 lg:px-0 z-40">
        <div className="relative max-w-[1200px] flex flex-wrap items-center justify-between mx-auto py-4">
          <a href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              className="w-72"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            onClick={toggleNav}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white">
              {navLinks.map((links) => (
                <li key={links.route}>
                  <Link
                    href={links.route}
                    className={
                      router.pathname === links.route ? "navActive" : ""
                    }
                  >
                    {links.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            className="hidden md:block"
            href={"/contact"}
          >
            <button className="text-[color:var(--main-color)] border border-[color:var(--main-color)] px-3 py-1 rounded-full hover:text-white hover:bg-[color:var(--main-color)]">
              Contact Us
            </button>
          </Link>
        </div>
        {/* Nav Model Repsonive */}
        <div
          style={{
            display: showNav ? "hidden" : "block",
            opacity: showNav ? "1" : "0",
            left: showNav ? "0%" : "-200px",
            transition: ".4s",
          }}
          className="bg-white w-full absolute top-100 lg:hidden"
        >
          <div className="border pl-2 py-5 mt-2">
            <ul className="">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text[color:var(--dark-color)] rounded md:border-0 hover:text-[color:var(--main-color)] md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/our-story"
                  className="block py-2 pl-3 pr-4 text[color:var(--dark-color)] rounded md:border-0 hover:text-[color:var(--main-color)] md:p-0"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="block py-2 pl-3 pr-4 text[color:var(--dark-color)] rounded md:border-0 hover:text-[color:var(--main-color)] md:p-0"
                >
                  Products & Services
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="block py-2 pl-3 pr-4 text[color:var(--dark-color)] rounded md:border-0 hover:text-[color:var(--main-color)] md:p-0"
                >
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
