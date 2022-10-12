import Link from "next/link";

export default function ButtonPrimary({ href, name }) {
  return (
    <Link href={href}>
      <div className="relative">
        <div className="absolute inset-0 -bottom-1 bg-gradient-to-r from-primary to-secondary blur-sm -z-10"></div>
        <a className="cursor-pointer px-5 py-2 bg-dark text-white shadow-lg rounded text-xs">
          {name}
        </a>
      </div>
    </Link>
  );
}
