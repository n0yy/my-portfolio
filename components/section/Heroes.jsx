import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import SocialMedia from "../SocialMedia";

export default function Heroes() {
  return (
    <section className="py-24 lg:-mt-16 lg:pt-52 lg:py-12 mb-40 px-10 lg:px-36">
      <div className="flex items-center justify-center py-1 mx-auto border border-primary rounded-md text-white shadow shadow-primary text-sm w-[290px] mb-10 lg:mb-0">
        <Image src="/assets/logo/showwcase.png" width={36} height={36} />
        <Link href="https://www.showwcase.com/syncr0nate">
          <span className="">
            You can find me in{" "}
            <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-primary to-secondary">
              Showwcase
            </span>
          </span>
        </Link>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly">
        <div className="w-full lg:w-5/12 flex flex-col-reverse lg:flex-row items-center z-0 relative">
          <div className="absolute w-64 h-64 bg-primary/50 rounded-full inset-0 blur-3xl"></div>
          <div className="absolute w-56 h-56 bg-secondary/50 rounded-full inset-36 blur-3xl"></div>
          <SocialMedia />
          <Image
            src="/assets/img/me.png"
            height={350}
            width={350}
            alt="Danang Hapis Fadillah"
          />
        </div>
        <div className="w-full lg:w-6/12 z-0">
          <h3 className="text-sm text-white/30 font-josefin">Syncr0nate</h3>
          <h1 className="text-3xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            I’m Danang Hapis Fadillah
          </h1>
          <p className="font-inter text-gray-500 tracking-wider text-sm font-extralight mt-3">
            Hello my name is Danang Hapis Fadillah 19 years old. I am a Front
            End Developer, I became interested in Front End world since 1 year
            ago. I am also a stoic, a school of philosophy from a philosopher
            from Citium, namely Zeno.
          </p>
          <div className="mt-5 flex items-center space-x-3">
            <ButtonPrimary
              href="https://resume.showwcase.com/syncr0nate.pdf"
              name="View Resume"
            />
            <ButtonSecondary
              href="https://github.com/syncr0nate"
              name="My Github"
              logo="/assets/logo/github.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
