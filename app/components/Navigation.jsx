const { default: Link } = require("next/link")

export  default function Navigation(){
    return (
        <header className="grid grid-cols-2 items-center ">
            <div className="logo">Logo</div>
            <nav className="flex">
                <ul className="flex gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/clientcomp">ClientCmp</Link></li>
                    <li><Link href="/servercomp">ServerCmp</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/service">Service</Link></li>

                </ul>

            </nav>
        </header>
    )
}