import Image from "next/image";
import Emoji from "../Emoji";

export default function Hobbies() {
  const images = [
    { id: 1, imgUrl: "/assets/img/hike1.png" },
    { id: 2, imgUrl: "/assets/img/hike3.png" },
    { id: 3, imgUrl: "/assets/img/hike2.png" },
    { id: 4, imgUrl: "/assets/img/hike4.png" },
  ];
  return (
    <section
      id="hobbies"
      className="px-10 lg:px-36 bg-gradient-to-bl from-primary to-secondary py-7 flex flex-col lg:flex-row items-center justify-evenly lg:justify-between min-h-screen"
    >
      <div className="w-full lg:w-5/12">
        <h3 className="font-josefin text-sm text-primary">Hobbies</h3>
        <h1 className="font-josefin font-medium text-white text-3xl">
          When i get bored with coding, i usually climb mountains.{" "}
          <Emoji symbol="🥱" />
        </h1>
        <p className="text-slate-200 tracking-wider font-inter font-thin">
          You can contact me if you want to hike together <Emoji symbol="🤙" />
        </p>
      </div>
      <div className="w-full lg:w-6/12 flex flex-wrap lg:flex-nowrap items-center gap-3">
        <div className="flex flex-wrap-reverse lg:flex-nowrap items-end flex-col gap-3 mt-10 lg:mt-0">
          <div className="relative shadow-xl w-72 h-40 rounded-lg overflow-hidden">
            <Image
              src="/assets/img/hike1.png"
              layout="fill"
              blurDataURL="/assets/img/hike.1.png"
              objectFit="cover"
              alt="Hike 1"
            />
          </div>
          <div className="relative shadow-xl w-48 h-56 rounded-lg overflow-hidden">
            <Image
              src="/assets/img/hike3.png"
              width={220}
              height={258}
              layout="fill"
              objectFit="cover"
              alt="Hike 2"
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap-reverse lg:flex-nowrap items-end lg:items-start gap-3 mt-7 lg:mt-7">
          <div className="relative w-64 h-72 overflow-hidden shadow-2xl rounded-lg">
            <Image
              src="/assets/img/hike2.png"
              layout="fill"
              objectFit="cover"
              alt="Hike 3"
            />
          </div>
          <div className="relative w-52 h-64 overflow-hidden shadow-xl rounded-lg">
            <Image
              src="/assets/img/hike4.png"
              layout="fill"
              objectFit="cover"
              alt="Hike 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
