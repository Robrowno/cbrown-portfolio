"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import { SteeringWheelButton, NotebookButton } from '../components/roundButtons.js';
import latestResults from '../latestResults/rallyResults.json';


export default function RallyingPage() {

    const itemsPerPage = 4; // Change this to control how many items you want per page
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(latestResults.length / itemsPerPage);

    const paginatedResults = latestResults.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="min-h-screen gradient-grey">
            <div className="pt-10 mt-10">
                <h1 className="text-3xl font-bold text-center">Rallying</h1>
            </div>

            <div className="flex flex-col justify-between gap-4 text-center items-center mt-10">
                <div>
                    <div className='mb-4'>
                        <p className="text-xl font-semibold mb-4">My Rallying Story:</p>
                        <hr className="w-8 h-1 mx-auto my-4 bg-yellow-400 border-0 rounded"></hr>
                        <Image className='mx-auto rounded-sm' src="/images/mini-fast-pic.JPG" width={600} height={400} />
                        <p className='text-sm text-gray-600 pb-4'>My First Rally as a Driver (March 2022)</p>

                        <p className='w-[80%] mx-auto p-1'> I have a background in Karting from a young age, so I have been into motorsport for some time now whether competing or not.
                            A chance encounter with a racing driver in 2021 led me to the world of Rallying, and I was instantly hooked.
                            I attended a course at the London Rally School and got my first taste of Rallying in a Ford Escort MK2.
                            From there, I decided it was time to get into my own car and start competing. I got my licence in January 2022, attended my first event with the Southern Car Club in February 2022 and entered my first rally in March 2022.
                        </p>
                        <p className='w-[80%] mx-auto p-1'>In my second ever rally, with co-driver Harriet Worth by my side, we took a round win at DST Leconsfield. It was an incredible achievement for both of us and is
                            a memory in motorsport that I will cherish forever. We were even featured in an MSUK article following the win: <Link className="text-blue-500" href="https://www.motorsportuk.org/the-pocket-rockets-bringing-low-cost-rallying-to-the-fore/">Link to Article.</Link>
                        </p>
                        <p className='w-[80%] mx-auto p-1'>Following a few more drives, that included a big crash, exploring gravel and tarmac events and more across the UK, I decided that I would like to try competing on the other side of the car.
                            I made the decision at the end of 2022 to begin Co-Driving for the 2023 season, and I have been doing so ever since.
                        </p>
                    </div>

                    <div className='mb-4'>
                        <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-4 text-center items-center mt-10">
                            <div className='flex flex-col items-center justify-center w-1/2'>
                                <p className="text-xl font-semibold mb-4">Driver Profile:</p>
                                <SteeringWheelButton />
                            </div>
                            <div className='flex flex-col items-center justify-center w-1/2'>
                                <p className="text-xl font-semibold mb-4">Co-Driver Profile:</p>
                                <NotebookButton />
                            </div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <p className="text-xl font-semibold mb-4">Latest Events/Results:</p>
                        <hr className="w-8 h-1 mx-auto my-4 bg-yellow-400 border-0 rounded"></hr>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                            {paginatedResults.map((result, index) => (
                                <div key={index} className="bg-white p-4 rounded-md shadow-md">
                                    <Image src={result.image} width={200} height={150} className="rounded-sm mx-auto" />
                                    <h2 className="text-lg font-semibold mt-2">{result.name}</h2>
                                    <p><span className='font-semibold'>Date:</span> {result.date}</p>
                                    <p><span className='font-semibold'>Location:</span> {result.location}</p>
                                    <p><span className='font-semibold'>Car:</span> {result.car}</p>
                                    <p><span className='font-semibold'>Driver:</span> {result.driver}</p>
                                    <p><span className='font-semibold'>Co-Driver:</span> {result.coDriver}</p>
                                    <p><span className='font-semibold'>Team:</span> {result.team}</p>
                                    {result.finished ? (
                                        <>
                                            <p><span className='font-semibold'>Championship Result:</span> {result.championshipResult}</p>
                                            <p><span className='font-semibold'>Class Result:</span> {result.classResult}</p>
                                            <p><span className='font-semibold'>Overall Result:</span> {result.overallResult}</p>
                                        </>
                                    ) : (
                                        <>
                                            <p><span className='font-semibold'>Result:</span> Retired</p>
                                            <p><span className='font-semibold'>Reason:</span> {result.reason}</p>
                                        </>
                                    )}

                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentPage(idx + 1)}
                                    className={`mr-2 px-3 py-1 rounded ${currentPage === idx + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                        </div>
                    </div>


                </div>

                <div className='mb-4'>
                    <p className="text-xl font-semibold mb-4">Need a Co-Driver?</p>
                    <hr className="w-8 h-1 mx-auto my-4 bg-yellow-400 border-0 rounded"></hr>
                    <p className='w-[80%] mx-auto p-1'>Do you need a co-driver for an upcoming event? Even at fairly short notice I might be able to help!
                        Send me a message through my contact page and give me some rough details about the event and I will get back to you as soon as possible.
                    </p>
                    <p className='pb-2'>Alternatively, feel free to send me a DM on Instagram, LinkedIn or Facebook and we can discuss next steps from there!</p>

                    <div className="inline-flex justify-center space-x-4 lg:space-x-8 bg-yellow-400 p-2 rounded-xl mt-3">
                        <a href="https://www.instagram.com/cbrownrally/" rel="noreferrer" target="_blank">
                            <BsInstagram className="text-3xl hover:-translate-y-1 transition-transform cursor-pointer text-white hover:text-black" />
                        </a>
                        <a href="https://www.linkedin.com/in/christian-brown-ba7741171/" rel="noreferrer" target="_blank">
                            <BsLinkedin className="text-3xl hover:-translate-y-1 transition-transform cursor-pointer text-white hover:text-black" />
                        </a>
                        <a href="https://www.facebook.com/christian.brown.100" rel="noreferrer" target="_blank">
                            <BsFacebook className="text-3xl hover:-translate-y-1 transition-transform cursor-pointer text-white hover:text-black" />
                        </a>
                    </div>


                </div>

            </div>

        </div>

    );
}