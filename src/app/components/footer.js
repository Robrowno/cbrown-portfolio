import React from "react";
import { BsInstagram, BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

function Footer() {
    return (
        <footer className="w-full mx-auto z-50 bg-gray-800 shadow text-white py-4">
            <div className="container mx-auto">
                <div className="flex justify-center items-center md:justify-between">
                    <div className="flex space-x-6 items-center mb-4 md:mb-0">
                        <img id="logo-footer" className="hidden md:block" src="/my-logo-small.png" alt="logo of letter C" />
                        <small className="mt-3 hidden md:block">© 2023 Christian Brown</small>
                    </div>

                    {/* Remove md:flex-col from the following div */}
                    <div className="flex justify-center space-x-10 md:space-x-8 md:mr-3">
                        <a href="https://www.instagram.com/cbrownrally/" rel="noreferrer" target="_blank">
                            <BsInstagram className="text-3xl w-8 h-8 hover:-translate-y-1 transition-transform cursor-pointer text-white" />
                        </a>
                        <a href="https://github.com/Robrowno" rel="noreferrer" target="_blank">
                            <BsGithub className="text-3xl w-8 h-8 hover:-translate-y-1 transition-transform cursor-pointer text-white" />
                        </a>
                        <a href="https://www.linkedin.com/in/christian-brown-ba7741171/" rel="noreferrer" target="_blank">
                            <BsLinkedin className="text-3xl w-8 h-8 hover:-translate-y-1 transition-transform cursor-pointer text-white" />
                        </a>
                        <a href="https://www.facebook.com/christian.brown.100" rel="noreferrer" target="_blank">
                            <BsFacebook className="text-3xl w-8 h-8 hover:-translate-y-1 transition-transform cursor-pointer text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
