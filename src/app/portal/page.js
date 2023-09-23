export default function Portal(){
    return(
        <section className=" h-screen w-full flex items-center justify-center text-white">
            <form className="border h-2/3 w-2/3 rounded border-white flex justify-between">
                <div className=" h-full w-1/4 border border-white flex flex-col gap-4 items-center justify-center">
                    <button className=" hover:bg-indigo-600 rounded p-2">Je suis une organisation</button>
                    <button className=" hover:bg-indigo-600 rounded p-2">Je suis un participant</button>
                </div>
                <div className=" w-full">
                    <h1 className="text-center"> Connectez vous !</h1>
                    <div className="  h-3/5  relative">
                        
                    </div>
                    <div className="text-center w-full flex items-center justify-center ">
                        <button className=" bg-indigo-600 p-2 rounded ">
                            Connectez vous
                        </button>
                    </div>
                    
                </div>
            </form>
            
        </section>
    )
}