import Link from "next/link"

export const Navbar = () => (
    
    <nav className="w-full h-24 fixed flex justify-around items-center top-0 text-white">
        <Link href="/">Home</Link>
        <Link href="/portal" className=" bg-indigo-600 p-2 px-4 rounded">Log In</Link>
    </nav>
    
)