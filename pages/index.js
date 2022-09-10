import Head from "next/head";
import Layout from "../components/Layout";
import Contact from "../components/section/Contact";
import Heroes from "../components/section/Heroes";
import Hobbies from "../components/section/Hobbies";
import Projects from "../components/section/Projects";
import Skills from "../components/section/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Syncr0nate</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A Portfolio Web, build by my self | Sync0nate | Danang Hapis Fadillah"
        />
      </Head>
      <Layout>
        <Heroes />
        <Skills />
        <Projects />
        <Hobbies />
        <Contact />
      </Layout>
    </>
  );
}
