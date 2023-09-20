import Image from "next/image"


export default function About() {

    return (
        <div className="min-h-screen gradient-grey">

            <div className="py-10 my-10">
                <h1 className="text-3xl font-bold text-center">About</h1>
            </div>
            <div className="flex flex-col text-center items-center justify-center">
                <div className=" w-60 h-60 rounded-full overflow-hidden shadow-xl">
                    <Image className="shadow-lg" src="/images/me_in_france.jpeg" alt="a photo of me in front of Le Mont Saint-Michel" width={300} height={300} objectFit="cover" />
                </div>
                <div className="mt-10">
                    <p className="text-xl font-semibold mb-4">Hi, I&apos;m Christian!</p>
                    <hr className="w-8 h-1 mx-auto my-4 bg-yellow-400 border-0 rounded"></hr>
                    <div className="flex flex-col gap-4 max-w-lg md:max-w-6xl mb-8">
                        <p >I am a Software Developer and Rally Co-Driver based in London. I am a team-oriented individual with a multi-cultural background,
                            having lived in 8 different countries over the past 25 years.</p>
                        <p>Upon to my return to the UK in 2016, I have worked predominantly in the automotive industry for companies including Mercedes-Benz and McLaren Automotive.
                            Following the pandemic, I had a desire for new growth and opportunities. Since then, I have embarked on a journey towards a goal of becoming a Software Engineer and taking on
                            new challenges in motorsport as both a Rally Driver and more recently, a Co-Driver. Since leaving the automotive industry, I broke down my targets into two destinct categories: a professional target and a passion target.
                            I took on a Coding Bootcamp in 2022 with Code Institute, with the goal of attaining an EQF Level 5 qualification in Software Development.
                            I started Rallying at the start of 2022 as well, with a drive with WB Motorsports in the Mini Rally Championship.
                            I had many highs and lows in my first year, including a rally win and a crash, but more importantly I got involved with an incredible community of people and made some great friends along the way.
                            It also set me up for making new choices for the following year and building on my goal of competing at a higher level in Rallying.
                        </p>
                        <p>
                            In 2023, I finished my course and attained my Diploma in Full Stack Software Development, and promptly joined Xander Talent&apos;s Software Engineering Academy in February 2023.
                            I also had my debut as a Co-Driver in 2023, entering the Mini Rally Challenge again, with standalone co-drives dotted in-between, including my first closed road event at the Corbeau Seats Clacton Rally in a Ford Puma.
                            I&apos;ve since had several podium finishes in the Mini Challenge and gained a lot more experience to take forward with me for the next season.
                        </p>
                        <Image className="mx-auto mb-2 shadow-lg" src="/images/code-institute-diploma.png" alt="a picture of my code institute diploma" width={700} height={450} />
                        <p> In Regards to Software, I graduated from the Xander Academy in May 2023, and have since decided to start a Degree at the University of West London studying a BSc in Computer Science.
                            I am now actively searching for internship and work experience opportunities to take on whilst working towards my degree. I can&apos;t wait to see where this new journey takes me!</p>

                        <Image className="mx-auto mb-2 shadow-lg" src="/images/xander-c9.JPG" alt="a group photo of the xander academy cohort 9" width={700} height={400} />
                        <p className="text-sm text-gray-600">Xander Academy Cohort 9</p>
                    </div>

                </div>

                <div className="mt-10 pb-32 skills-div">
                    <h2 className="text-2xl font-bold">Skills:</h2>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">Git</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">HTML</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">CSS</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">Bootstrap </span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">Tailwind CSS</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">Python</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">JavaScript</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">React</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">Django</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">Flask</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">NodeJS</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">SQL</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">PostgreSQL</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">AWS S3</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">Github</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">Heroku</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">Cloudinary</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">Agile Methodologies</span>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full shadow-md">Clean Code</span>
                    </div>
                    <h2 className="text-2xl font-bold mt-5">Currently Learning:</h2>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full shadow-md">Java</span>
                        <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full shadow-md">Selenium</span>
                        <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full shadow-md">MongoDB</span>
                        <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full shadow-md">NextJS v13</span>
                    </div>
                </div>

            </div>
        </div>
    )
}