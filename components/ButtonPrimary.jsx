import Link from "next/link";

export default function ButtonPrimary({ href, name }) {
  return (
    <Link href={href}>
      <a className="px-5 py-2 bg-gradient-to-br from-primary to-secondary text-white shadow-lg hover:shadow-xl rounded text-xs">
        {name}
      </a>
    </Link>
  );
}
