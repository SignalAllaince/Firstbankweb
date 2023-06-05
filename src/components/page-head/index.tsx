import Head from "next/head";

function PageHead({ title }: { title: string }) {
  return (
    <Head>
      <title>{title} / FirstBank Store</title>
      <meta name="description" content="FirstBank Store" />
      <link rel="icon" href="/favicon/favicon.ico" />
    </Head>
  );
}

export default PageHead;
