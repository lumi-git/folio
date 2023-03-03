import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
export default function Home() {
    return (
        <Layout>
            <Head>

                <title>Home </title>
            </Head>

            <div className='grid justify-center'>
                <h1 className='mt-80 text-6xl hover:text-7xl  duration-500 '> Home page !</h1>
            </div>
            <div className="p-80 "></div>
            <div className="p-80 "></div>
        </Layout>
    )
}