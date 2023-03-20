import Link from "next/link";

export default function OverlayNavbar({ menu, hideOverlay, menuLinks }) {
  return (
    <div
      className={`${
        menu ? "translate-x-0" : "-translate-x-full"
      } w-full min-h-screen bg-dark p-10 transition top-0 z-50 fixed`}
    >
      <span className="absolute right-5" onClick={hideOverlay}>
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
          <li key={menu.id} onClick={hideOverlay}>
            <Link href={menu.url}>
              <span className={`text-gray-300 hover:text-gray-700`}>
                {menu.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Link href="#contact">
          <span className="relative text-white px-7 py-2 bg-dark rounded-md">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-secondary blur-[2px] rounded-md"></div>
            Contact Me
          </span>
        </Link>
      </div>
    </div>
  );
}
