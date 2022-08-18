import Image from "next/image";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import SocialMedia from "../SocialMedia";
import Emoji from "../Emoji";

export default function Heroes() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-evenly py-10 mt-3 lg:-mt-16 lg:pt-32 lg:py-12 mb-40 px-10 lg:px-36">
      <div className="w-full lg:w-5/12 flex flex-col-reverse lg:flex-row items-center z-0">
        <SocialMedia />
        <Image
          src="/assets/img/me.png"
          height={350}
          width={350}
          alt="Danang Hapis Fadillah"
        />
      </div>
      <div className="w-full lg:w-6/12 z-0">
        <h3 className="text-sm text-primary font-josefin">Syncr0nate</h3>
        <h1 className="text-3xl font-josefin">
          I’m Danang Hapis Fadillah
          <Emoji symbol="👋" />
        </h1>
        <p className="relative font-inter text-gray-500 tracking-wider text-sm font-extralight mt-3">
          Hello my name is Danang Hapis Fadillah 19 years old. I am a Front End
          Developer, I became interested in Front End world since 1 year ago. I
          am also a stoic, a school of philosophy from a philosopher from
          Citium, namely Zeno.
          <span className="absolute right-0 -bottom-5 lg:-bottom-16">
            <Image
              src="/assets/img/zeno.png"
              width={120}
              height={170}
              alt="Zeno of Citium"
            />
          </span>
        </p>
        <div className="mt-5 flex items-center space-x-3">
          <ButtonPrimary href="/assets/files/resume.pdf" name="Download CV" />
          <ButtonSecondary
            href="https://github.com/syncr0nate"
            name="Github"
            logo="/assets/logo/github.png"
          />
        </div>
      </div>
    </section>
  );
}
