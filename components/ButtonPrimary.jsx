import Link from "next/link";

export default function ButtonPrimary({ href, name }) {
  return (
    <Link href={href}>
      <a className="cursor-pointer px-5 py-2 bg-gradient-to-br from-primary to-secondary hover:shadow-2xl shadow-secondary text-white shadow-lg rounded text-xs">
        {name}
      </a>
    </Link>
  );
}
