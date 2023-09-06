// components/Navbar.js
'use client'

import React, { useState } from "react";
import Link from "next/link";
import { BsList, BsX, BsInstagram, BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

const styles = {
    navLinks: 'cursor-pointer ml-10 border-b-2 hover:text-gray-400',
    resume: 'cursor-pointer px-4 py-1 border border-[#F6B519] text-black rounded-full bg-[#F6B519] hover:text-[#F6B519] hover:bg-black ease-in-out duration-300',
}

function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const toggleNavbar = () => setNavbarOpen(!navbarOpen);
    return (
        <header>
            {/* Desktop Menu */}
            <nav className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-3xl font-bold">Christian Brown</Link>
                    <ul className="space-x-8 hidden sm:flex">
                        <li className={styles.navLinks}> <Link href="/about">About </Link> </li>
                        <li className={styles.navLinks}> <Link href="/projects">Projects </Link> </li>
                        <li className={styles.navLinks}> <Link href="/rallying">Rallying </Link> </li>
                        <li className={styles.navLinks}> <Link href="/contact">Contact </Link> </li>
                        <li className={styles.resume}> <Link href="/resume">Resume </Link> </li>
                    </ul>
                    {/* Mobile Menu */}
                    <div onClick={toggleNavbar} className=" flex items-center sm:hidden cursor-pointer">
                        <BsList className="text-3xl w-8 h-8 text-white mobile-menu-button" />
                    </div>
                </div>
                <div className={navbarOpen ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-6 ease-in-out duration-500" : "fixed left-[-100] top-0 p-10 ease-in-out duration-500 hidden"}>
                    <div onClick={toggleNavbar} className="flex justify-end w-full items-center">
                        <BsX className="text-3xl w-8 h-8 text-black mobile-menu-button" />
                    </div>
                    {/* Mobile Menu links */}
                    <div className="flex-col py-4">
                        <ul>
                            <li onClick={() => setNavbarOpen(false)} className="py-4 hover:underline text-black hover:decoration-[#F6B519]"> <Link href="/about">About</Link></li>
                            <li onClick={() => setNavbarOpen(false)} className="py-4 hover:underline text-black hover:decoration-[#F6B519]"> <Link href="/projects">Projects</Link></li>
                            <li onClick={() => setNavbarOpen(false)} className="py-4 hover:underline text-black hover:decoration-[#F6B519]"> <Link href="/rallying">Rallying</Link></li>
                            <li onClick={() => setNavbarOpen(false)} className="py-4 hover:underline text-black hover:decoration-[#F6B519]"> <Link href="/contact">Contact</Link></li>
                            <div className="flex items-center py-4">
                                <li onClick={() => setNavbarOpen(false)} className={styles.resume} ><Link href="/resume">Resume</Link></li>
                            </div>
                        </ul>
                    </div>
                    <div className="flex flex-row justify-around items-center py-4 px-2">
                        <BsInstagram className="text-3xl w-8 h-8 text-black" />
                        <BsGithub className="text-3xl w-8 h-8 text-black" />
                        <BsLinkedin className="text-3xl w-8 h-8 text-black" />
                        <BsFacebook className="text-3xl w-8 h-8 text-black" />

                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Navbar;
