import Image from "next/image";
import Header from "../Header";

export default function Hobbies() {
  return (
    <section
      id="hobby"
      className="px-8 lg:px-36 py-7 flex flex-col items-center min-h-screen"
    >
      <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
        <Header
          title="When i get bored with coding, i usually climb mountains."
          subTitle=" You can contact me if you want to hike together"
        />
      </div>
      <div className="w-full flex flex-wrap justify-around items-center gap-0 lg:gap-3">
        {[1, 2, 3, 4, 5, 6].map((img, index) => (
          <div key={index} className="mb-2 lg:mb-0">
            <Image
              src={`/assets/img/${img}.png`}
              width={330}
              height={190}
              quality={100}
              alt={img}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
