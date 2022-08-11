import Head from "next/head";
import Layout from "../components/Layout";
import Heroes from "../components/section/Heroes";
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
        <section></section>
      </Layout>
    </>
  );
}
