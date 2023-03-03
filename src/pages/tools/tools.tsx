import Link from "next/link";

import Layout from '../../components/layout';
import Image from 'next/image';
import Head from "next/head";
import Script from 'next/script';
const YourComponent = () => (
    <Image
        src="/images/next.svg" // Route of the image file

        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio


        alt="my component"
    />
);


export default function main() {
    return (
        <Layout>
            <Head>
                <title>Tools</title>
            </Head>

            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />

            <h1 className="title">
                <Link href="/">Redirect to Home page</Link>
            </h1>

            <YourComponent></YourComponent>

            <a> Tools ! </a>
        </Layout>
    );
}