import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Hello World !! This is JT learning the fundamental of Next.js</h1>
        <p>
          Read <Link href="/posts/first-post">the first post</Link>
        </p>
      </section>
    </Layout>
  );
}
