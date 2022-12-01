import Link from "next/link";
import { motion } from "framer-motion";

export default function ButtonPrimary({ href, name }) {
  return (
    <Link href={href}>
      <motion.div
        className="relative"
        whileHover={{ scale: 1.075 }}
        whileTap={{ scale: 0.925 }}
      >
        <div className="absolute inset-0 -bottom-1 bg-gradient-to-r from-primary to-secondary blur-sm -z-10"></div>
        <a className="cursor-pointer px-5 py-2 bg-dark text-white shadow-lg rounded text-xs">
          {name}
        </a>
      </motion.div>
    </Link>
  );
}
