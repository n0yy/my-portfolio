import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ButtonPrimary({ href, name, logo }) {
  return (
    <Link href={href}>
      <motion.span
        className="px-5 py-1.5 rounded text-xs flex max-w-fit items-center space-x-2 relative bg-gradient-to-br from-slate-50 to-slate-400 shadow"
        whileHover={{ scale: 1.075 }}
        whileTap={{ scale: 0.925 }}
      >
        {logo && <Image src={logo} width={18} height={18} alt={name} />}
        <span className="pt-[2px]">{name}</span>
      </motion.span>
    </Link>
  );
}
