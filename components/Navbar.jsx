import Link from "next/link";
import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import ButtonPrimary from "./ButtonPrimary";
import OverlayNavbar from "./OverlayNavbar";

export default function Navbar() {
  const menuLinks = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Skills", url: "#skills" },
    { id: 3, name: "Projects", url: "#projects" },
    { id: 4, name: "Hobby", url: "#hobby" },
  ];

  const [menu, setMenu] = useState(false);

  function hideOverlay() {
    setMenu(false);
  }

  return (
    <>
      <nav className="flex items-center justify-between px-8 lg:px-36 py-4 lg:py-5 bg-dark/90 backdrop-blur-sm fixed top-0 right-0 w-full z-50">
        <div>
          <h1 className="text-lg lg:text-xl font-josefin font-bold text-white">
            Syncr0nate
          </h1>
        </div>
        <div>
          <ul
            className={`hidden md:flex space-x-7 text-sm font-inter font-light`}
          >
            {menuLinks.map((menu) => (
              <li key={menu.id}>
                <Link href={menu.url}>
                  <span className={`text-gray-300 hover:text-gray-700`}>
                    {menu.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <ButtonPrimary href="#contact" name="Contact Me" />
        </div>

        {/* for mobile */}
        <BurgerIcon setMenu={setMenu} />
        {/* end for mobile */}
      </nav>
      {/* overlay */}
      <OverlayNavbar
        menu={menu}
        hideOverlay={hideOverlay}
        menuLinks={menuLinks}
      />
    </>
  );
}
