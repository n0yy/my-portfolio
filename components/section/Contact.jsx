import Image from "next/image";
import Emoji from "../Emoji";

export default function Contact() {
  const contacts = [
    {
      id: 1,
      name: "Gmail",
      content: "danangpostman37@gmail.com",
      logoURL: "/assets/logo/gmail.png",
      width: 22,
      height: 18,
    },
    {
      id: 2,
      name: "Location",
      content: "Bulak Barat No.179, Cipayung Kota Depok",
      logoURL: "/assets/icons/location.png",
      width: 26,
      height: 26,
    },
    {
      id: 3,
      name: "WhatsApp",
      content: "+628-9531-8348-10",
      logoURL: "/assets/icons/wa.png",
      width: 24,
      height: 24,
    },
  ];
  return (
    <section id="contact" className="my-40">
      <div className="text-ellipsis w-full px-10 lg:px-0 lg:w-1/4 mx-auto">
        <h3 className="font-josefin text-sm text-slate-300">Contact</h3>
        <h1 className="font-josefin text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-3xl">
          Let’s Discuss Your Project
        </h1>

        {contacts.map((contact) => (
          <div
            className="mt-10 flex items-center space-x-3 border-t py-5"
            key={contact.id}
          >
            <span className="bg-primary secondary p-2 flex items-center justify-center w-12 h-12 rounded-full">
              <Image
                src={contact.logoURL}
                width={contact.width}
                height={contact.height}
                alt={contact.name}
              />
            </span>
            <div className="font-josefin space-y-0">
              <h6 className="text-slate-200 text-xs">{contact.name}</h6>
              <p className="text-slate-100">{contact.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
