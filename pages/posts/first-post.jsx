import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <div>
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
      </div>
    </>
  );
}
