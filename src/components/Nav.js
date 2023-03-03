import Link from 'next/link';
export default function Nav() {
    return (
    <div>
        <div className="navbar  justify-center ">
            
            <Link className = "text-2xl hover:underline  mx-10 hover:text-3xl  duration-500" href="/">
                Home
            </Link>


            <Link className = "text-2xl hover:underline mx-10 hover:text-3xl  duration-500" href="/products">
                Products
            </Link>

            <Link className = "text-2xl hover:underline mx-10 hover:text-3xl  duration-500" href="#">
                About Us
            </Link>

            <Link className = "text-2xl hover:underline mx-10 hover:text-3xl  duration-500" href="#">
                More
            </Link>

        </div>
    </div>
    );
}