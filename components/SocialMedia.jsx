import Link from "next/link";
import Image from "next/image";

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
      href: "instagram.com/__hapeace/",
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
  ];
  return (
    <ul className="space-y-0 lg:space-y-5 pt-3 lg:pt-7 flex lg:flex-col space-x-5 lg:space-x-0">
      {socialMedia.map((item) => (
        <li className="cursor-pointer" key={item.id}>
          <Link href={item.href}>
            <Image src={item.imageURL} width={25} height={25} alt={item.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
