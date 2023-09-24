"use client"

import Link from "next/link"
import { useState } from "react"

export default function Page({ params }) {
    const [response, setResponse] = useState();

    const handleResponseClick = (element) => {
        setResponse(element);
    }

    return (
        <section className="w-full h-screen text-white text-center">
            <h1 className="text-center"> This is the {params.voteid}th question !</h1>

            <div className="flex flex-col gap-10 items-center">
                <ul className="w-2/3 flex flex-col justify-center rounded gap-8">
                    {["Yes", "No", "Blank vote"].map((element, index) => (
                        <li key={index} className={`w-full h-20 cursor-pointer text-center items-center flex justify-center border border-white transition-all duration-75 ${response == element ? 'bg-[#4f46e5]' : ''}`} onClick={() => handleResponseClick(element)}>
                            {element}
                        </li>
                    ))}
                </ul>
                <Link href={"/voteid/" + (parseInt(params.voteid) + 1)} className="bg-indigo-600 p-2 rounded"> Next question</Link>
            </div>
        </section>
    )
}
