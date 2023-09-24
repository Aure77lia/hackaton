"use client"

import Link from "next/link"
import { useState } from "react"

const verification = (userType) => {
    let exception = 0;
    try {
        if (userType == null) throw new Error("Veuillez séléctionner le type d'utilisateur");
    }
    catch(e){
        exception = 1;
        console.log(e.message)
        return e.message
    }
    if(exception ==0){
        return <Link className=" bg-indigo-600 p-2 rounded" href={ userType == 1 ? "/voteid/1" : ""}>
                            Connectez vous
        </Link>
        
    }
}

export default function Portal(){
    const [userType,setUserType] = useState();
    return(
        <section className="h-screen w-full flex items-center justify-center text-white">
            <form className="border h-2/3 w-2/3 rounded border-white flex justify-between">
                <div className="h-full w-1/4 border border-white flex flex-col gap-4 items-center justify-center">
                    <button type="button" className={`hover:bg-indigo-600 rounded p-2 ${userType == 0 ? 'bg-indigo-600' : ''}`} onClick={() => setUserType(0)}>Je suis une organisation</button>
                    <button type="button" className={`hover:bg-indigo-600 rounded p-2 ${userType == 1 ? 'bg-indigo-600' : ''}`} onClick={() => setUserType(1)}>Je suis un participant</button>
                </div>
                <div className=" w-full">
                    <h1 className="text-center"> Log In !</h1>
                    <div className="  h-3/5  relative">
                        
                    </div>
                    <div className="text-center w-full flex items-center justify-center ">
                        {verification(userType)}
                    </div>
                    
                </div>
            </form>
            
        </section>
    )
}