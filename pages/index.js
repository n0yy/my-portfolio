import Head from "next/head";
import Layout from "../components/Layout";
import Heroes from "../components/section/Heroes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Heroes />
        <section></section>
        <section></section>
      </Layout>
    </>
  );
}
