import Link from "next/link";
import Image from "next/image";

export default function ButtonPrimary({ href, name, logo }) {
  return (
    <Link href={href}>
      <a className="px-5 py-1.5 rounded text-xs flex max-w-fit items-center space-x-2 relative bg-gradient-to-br from-slate-50 to-slate-400 shadow">
        {logo && <Image src={logo} width={18} height={18} alt={name} />}
        <span className="pt-[2px]">{name}</span>
      </a>
    </Link>
  );
}
