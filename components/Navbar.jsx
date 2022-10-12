import Link from "next/link";
import { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";

export default function Navbar() {
  const menuLinks = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Skills", url: "#skills" },
    { id: 3, name: "Projects", url: "#projects" },
    { id: 4, name: "Hobby", url: "#hobby" },
  ];
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between px-5 lg:px-36 py-4 lg:py-5 bg-dark/90 backdrop-blur-sm fixed top-0 right-0 w-full z-50">
        <div>
          <h1 className="text-lg lg:text-xl font-josefin font-bold text-white">
            Syncr0nate
          </h1>
        </div>
        <div>
          <ul
            className={`hidden lg:flex space-x-7 text-sm font-inter font-light`}
          >
            {menuLinks.map((menu) => (
              <li key={menu.id} onClick={() => setMenu(false)}>
                <Link href={menu.url}>
                  <a className={`text-gray-300 hover:text-gray-700`}>
                    {menu.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <ButtonPrimary href="#contact" name="Contact Me" />
        </div>

        {/* for mobile */}
        <span className={`lg:hidden`} onClick={() => setMenu(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
        {/* end for mobile */}
      </nav>
      {/* overlay */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } w-full min-h-screen bg-dark p-10 transition top-0 z-50 fixed`}
      >
        <span className="absolute right-5" onClick={() => setMenu(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <ul className={`space-y-4 font-inter font-light mt-10`}>
          {menuLinks.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.url}>
                <a className={`text-gray-300 hover:text-gray-700`}>
                  {menu.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link href="#contact">
            <a className="relative text-white px-7 py-2 bg-dark rounded-md">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-secondary blur-[2px] rounded-md"></div>
              Contact Me
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
