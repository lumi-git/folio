import Link from 'next/link';
export default function Home() {
    return (
        <div>
            <h1 className="title">
                 <Link href="/tools/tools">Redirect to tools</Link>
            </h1>

            <a> Home page ! </a>
        </div>
    )
}