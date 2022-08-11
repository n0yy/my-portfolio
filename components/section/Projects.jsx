import Link from "next/link";
import Header from "../Header";

export default function Projects() {
  return (
    <section id="projects">
      <Header
        title="Latest Project"
        subTitle="Lately I've been working on a slicing design"
        dark={true}
      />
      <div>
        <Link href="https://api.whatsapp.com/send/?phone=6289531834810">
          <a>WA</a>
        </Link>
      </div>
    </section>
  );
}
