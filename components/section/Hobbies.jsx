import Image from "next/image";
import Emoji from "../Emoji";

export default function Hobbies() {
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
      <div className="w-full lg:w-6/12 flex items-center gap-3">
        <div className="flex items-end flex-col gap-3">
          <Image
            src="/assets/img/hike1.png"
            width={275}
            height={160}
            alt="Hike 1"
          />
          <Image
            src="/assets/img/hike3.png"
            width={220}
            height={258}
            alt="Hike 2"
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <Image
            src="/assets/img/hike2.png"
            width={237}
            height={275}
            alt="Hike 3"
          />
          <Image
            src="/assets/img/hike4.png"
            width={215}
            height={218}
            alt="Hike 4"
          />
        </div>
      </div>
    </section>
  );
}
