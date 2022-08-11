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
        <title>Home</title>
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
