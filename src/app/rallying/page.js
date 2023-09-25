"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";

const latestResults = [
    {
        name: 'DST Leconsfield',
        date: 'March 2022',
        location: 'Leconsfield, UK',
        car: 'Ford Escort MK2',
        driver: 'Christian Brown',
        coDriver: 'Harriet Worth',
        team: 'Brown Rallying',
        championshipResult: '1st',
        classResult: '1st',
        overallResult: '1st',
        image: '/images/mini-fast-pic.JPG'
    },
    {
        name: 'DST Leconsfield',
        date: 'March 2022',
        location: 'Leconsfield, UK',
        car: 'Ford Escort MK2',
        driver: 'Christian Brown',
        coDriver: 'Harriet Worth',
        team: 'Brown Rallying',
        championshipResult: '1st',
        classResult: '1st',
        overallResult: '1st',
        image: '/images/mini-fast-pic.JPG'
    },
    {
        name: 'DST Leconsfield',
        date: 'March 2022',
        location: 'Leconsfield, UK',
        car: 'Ford Escort MK2',
        driver: 'Christian Brown',
        coDriver: 'Harriet Worth',
        team: 'Brown Rallying',
        championshipResult: '1st',
        classResult: '1st',
        overallResult: '1st',
        image: '/images/mini-fast-pic.JPG'
    },
    {
        name: 'DST Leconsfield',
        date: 'March 2022',
        location: 'Leconsfield, UK',
        car: 'Ford Escort MK2',
        driver: 'Christian Brown',
        coDriver: 'Harriet Worth',
        team: 'Brown Rallying',
        championshipResult: '1st',
        classResult: '1st',
        overallResult: '1st',
        image: '/images/mini-fast-pic.JPG'
    },
    {
        name: 'DST Leconsfield',
        date: 'March 2022',
        location: 'Leconsfield, UK',
        car: 'Ford Escort MK2',
        driver: 'Christian Brown',
        coDriver: 'Harriet Worth',
        team: 'Brown Rallying',
        championshipResult: '1st',
        classResult: '1st',
        overallResult: '1st',
        image: '/images/mini-fast-pic.JPG'
    },

]


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
                        <p className='text-sm text-gray-600'>My First Rally as a Driver (March 2022)</p>

                        <p> I have a background in Karting from a young age, so I have been into motorsport for some time now whether competing or not.
                            A chance encounter with a racing driver in 2021 led me to the world of Rallying, and I was instantly hooked.
                            I attended a course at the London Rally School and got my first taste of Rallying in a Ford Escort MK2.
                            From there, I decided it was time to get into my own car and start competing. I got my licence in January 2022, attended my first event with the Southern Car Club in February 2022 and entered my first rally in March 2022.
                        </p>
                        <p>In my second ever rally, with co-driver Harriet Worth by my side, we took a round win at DST Leconsfield. It was an incredible achievement for both of us and is
                            a memory in motorsport that I will cherish forever. We were even featured in an MSUK article following the win: <Link className="text-blue-500" href="https://www.motorsportuk.org/the-pocket-rockets-bringing-low-cost-rallying-to-the-fore/">Link to Article.</Link>
                        </p>
                        <p>Following a few more drives, that included a big crash, exploring gravel and tarmac events and more across the UK, I decided that I would like to try competing on the other side of the car.
                            I made the decision at the end of 2022 to begin Co-Driving for the 2023 season, and I have been doing so ever since.
                        </p>
                    </div>

                    <div className='mb-4'>
                        <p className="text-xl font-semibold mb-4">Latest Events/Results:</p>
                        <hr className="w-8 h-1 mx-auto my-4 bg-yellow-400 border-0 rounded"></hr>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                            {paginatedResults.map((result, index) => (
                                <div key={index} className="bg-white p-4 rounded-md shadow-md">
                                    <Image src={result.image} width={200} height={150} className="rounded-sm" />
                                    <h2 className="text-lg font-semibold mt-2">{result.name}</h2>
                                    <p>Date: {result.date}</p>
                                    <p>Location: {result.location}</p>
                                    <p>Car: {result.car}</p>
                                    <p>Driver: {result.driver}</p>
                                    <p>Co-Driver: {result.coDriver}</p>
                                    <p>Team: {result.team}</p>
                                    <p>Championship Result: {result.championshipResult}</p>
                                    <p>Class Result: {result.classResult}</p>
                                    <p>Overall Result: {result.overallResult}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            {Array(Math.ceil(latestResults.length / itemsPerPage)).fill(null).map((_, idx) => (
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
                    <p>Do you need a co-driver for an upcoming event? Even at fairly short notice I might be able to help!
                        Send me a message through my contact page and give me some rough details about the event and I will get back to you as soon as possible.
                    </p>
                    <p>Alternatively, feel free to send me a DM on Instagram, LinkedIn or Facebook and we can discuss next steps from there!</p>

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