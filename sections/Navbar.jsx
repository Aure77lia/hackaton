"use client"

import Link from "next/link"

import { useWeb3 } from "@3rdweb/hooks"
import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = "goerli";
export const Navbar = () => {
    

    return (
        <ThirdwebProvider activeChain={activeChain}>
            <nav className="w-full h-24 fixed flex justify-around items-center top-0 text-white z-10">
                <Link href="/">Home</Link>
                <ConnectWallet theme="dark" />
                <Link href="/portal" className=" bg-indigo-600 p-2 px-4 rounded">Log In</Link>
            </nav>
        </ThirdwebProvider>
    )
}