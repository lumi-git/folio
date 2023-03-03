import Layout from '../components/layout';
import Head from "next/head";


export default function main() {
    return (
        <Layout>
            <Head>
                <title>Our Products</title>
            </Head>
            <div className='grid justify-center'>
                <h1 className='text-7xl p-5 m-10'> Our products</h1>
            </div>


            <div className = "divider divider-horizontal w-20 bg-slate-50"></div>

            
            <div className = "mt-20 bg-opacity-60  bg-gradient-to-r from-orange-200 to-orange-300 grid justify-center ">

                <a className = "text-5xl p-20 hover:translate-x-52    transition-transform duration-500  " >
                    <p>Introducing Product 1</p>



                </a>


            </div>




            <div className="p-80 "></div>

        </Layout>
    );
}