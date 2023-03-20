import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SocialMedia() {
  const socialMedia = [
    {
      id: 1,
      name: "WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=6289531834810",
      imageURL: "/assets/logo/wa.png",
    },
    {
      id: 2,
      name: "Instagram",
      href: "https://www.instagram.com/__hapeace/",
      imageURL: "/assets/logo/ig.png",
    },
    {
      id: 3,
      name: "Facebook",
      href: "https://web.facebook.com/danang449",
      imageURL: "/assets/logo/fb.png",
    },
    {
      id: 4,
      name: "Twitter",
      href: "https://twitter.com/syncr0nate",
      imageURL: "/assets/logo/twitter.png",
    },
    {
      id: 5,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/danang-hapis-fadillah-682878202/",
      imageURL: "/assets/logo/link.png",
    },
  ];
  return (
    <div className="space-y-0 lg:space-y-7 pt-3 lg:pt-7 flex lg:flex-col space-x-5 lg:space-x-0">
      {socialMedia.map((item) => (
        <Link href={item.href} passHref={true} key={item.id}>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.925 }}
            target="_blank"
          >
            <Image
              src={item.imageURL}
              width={25}
              height={25}
              alt={item.name}
              quality={100}
            />
          </motion.span>
        </Link>
      ))}
    </div>
  );
}
