import Link from "next/link";
import ButtonPrimary from "./ButtonPrimary";

export default function Navbar() {
  const menuLinks = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Skills", url: "#skills" },
    { id: 3, name: "Projects", url: "#projects" },
    { id: 4, name: "Hobby", url: "#hobby" },
  ];

  return (
    <nav className="flex items-center justify-between px-36 py-7">
      <div>
        <h1 className="text-xl font-josefin font-bold">Syncr0nate</h1>
      </div>
      <div>
        <ul className="flex space-x-7 text-sm font-inter font-light">
          {menuLinks.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.url}>
                <a className={`text-gray-500 hover:text-gray-700`}>
                  {menu.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ButtonPrimary href="#contact" name="Contact Me" />
      </div>
    </nav>
  );
}
