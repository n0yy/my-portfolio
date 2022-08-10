import Image from "next/image";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import SocialMedia from "../SocialMedia";

export default function Heroes() {
  return (
    <section className="flex items-center justify-evenly py-12">
      <div className="w-5/12 flex items-center">
        <SocialMedia />
        <Image
          src="/assets/img/me.png"
          height={350}
          width={350}
          alt="Danang Hapis Fadillah"
        />
      </div>
      <div className="w-6/12">
        <h3 className="text-sm text-secondary font-josefin">Syncr0nate</h3>
        <h1 className="text-3xl font-josefin">
          Hello, I’m Danang Hapis Fadillah
        </h1>
        <p className="font-inter text-gray-500 tracking-wider text-sm font-extralight mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet,
          interdum pellentesque non eget aliquam tristique est adipiscing. Quis
          vivamus nibh et a id eget varius urna neque. Tellus congue vestibulum
          auctor orci eget consectetur non. Varius purus, sapien volutpat
          senectus pretium ac morbi blandit.
        </p>
        <div className="mt-5 flex items-center space-x-3">
          <ButtonPrimary href="/" name="Download CV" />
          <ButtonSecondary
            href="/"
            name="Github"
            logo="/assets/logo/github.png"
          />
        </div>
      </div>
    </section>
  );
}
