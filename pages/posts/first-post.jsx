import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Welcome this is a new post</h1>
      <Image
        width="144"
        height="144"
        src="/images/profile.jpg"
        alt="Profile pic"
      />
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}
