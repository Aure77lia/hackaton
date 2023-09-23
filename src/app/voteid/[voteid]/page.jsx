import Link from "next/link"

export default function Page({ params }) {
    return (
    <section className=" w-full h-screen text-white text-center">
        <h1 className=" text-center"> This is the {params.voteid}th question !</h1>

        <div className=" flex flex-col gap-10 items-center">
          <ul className=" w-2/3 flex flex-col justify-center rounded gap-8">
          {[1,2,3,4].map((element,index)=> (
            <li key={index} className=" w-full h-20 text-center items-center flex justify-center border border-white">
              {element}
            </li>
          ))}
          </ul>

          <Link href={"/voteid/" +  params.voteid} className=" bg-indigo-600 p-2 rounded"> Next question</Link>
        </div>
    </section>
    )
  }