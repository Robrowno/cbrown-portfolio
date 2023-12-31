import Link from "next/link";
import Image from "next/image";


export default function Home() {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-4 gradient-grey">
                <div className="col-span-1 md:col-span-3 row-span-full my-12 py-7">
                    <h1 className="text-3xl font-bold text-center mt-2">Home</h1>

                    <div className="home-content">
                        <p>
                            Welcome to my website! I am a <span className="font-semibold">Full-Stack Software Developer</span> and <span className="font-semibold">Rally Co-driver</span> based in the UK.
                            I am currently working towards a BSc in Computer Science at the University of West London (2023-2026), after a successful completion of
                            the Xander Talent Academy in London and attaining an EQF Level 5 diploma in Full-Stack Software Development from Code Institute in March 2023.
                        </p>
                        <br />
                        <p>
                            Please get in touch with me if you are hiring, or if you would like to collaborate on a project! Alternatively, if you need a co-driver for rally events,
                            across the UK or Europe, please get in touch.
                        </p>
                    </div>
                    <div className="button-row">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full">
                            <Link href="/contact">Contact</Link>
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-full">
                            <Link href="/rallying">Rallying</Link>
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-5 rounded-full">
                            <Link href="/resume">Resume</Link>
                        </button>
                    </div>
                    <hr className="md:hidden" />
                </div>

                <div className="col-span-1 md:col-span-1">
                    <Image src="/images/me_in_france.jpeg" alt="Me in France" className="object-cover border-left responsive-image hidden md:block" width={480} height={620} />
                </div>
            </div>
            <hr className="hidden md:block" />

        </section>


    );
}
