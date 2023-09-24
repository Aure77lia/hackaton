export const Hero = () => (
        <div className="text-5xl w-full min-h-screen flex flex-col relative font-semibold text-center justify-center items-center text-white gap-y-10">
            <div>VoteChain</div>
            <div className=" text-white flex gap-8 items-center">
                <a href="/portal" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                <a href="#presentation" className="text-sm font-semibold leading-6">Learn more <span aria-hidden="true">→</span></a>
            </div>
        </div>
)