'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

function ContactForm() {
    const [state, handleSubmit] = useForm("xqkvlojn");
    if (state.succeeded) {
        return (
            <div className="text-center border rounded-xl py-10 min-h-screen">
                <h1 className="text-3xl my-11 font-bold text-center">Contact</h1>
                <p className="text-2xl">Thanks for your message! I will get back to you as soon as possible.</p>
                <button className=" bg-red-400 px-4 mt-5 rounded-lg">
                    <Link href="/">Back</Link>
                </button>
            </div>
        );
    }
    return (
        <main>
            <div className="py-10 min-h-screen gradient-grey">
                <h1 className="text-3xl my-11 font-bold text-center">Contact</h1>

                <div className="text-center mt-5">
                    <p className=' px-2'> Want to reach me? Maybe you would like to enquire about any of the below subjects:</p>
                    <ul className="list-disc pt-2">
                        <li>Hiring for Software Development</li>
                        <li>Co-driving for an Upcoming Rally</li>
                        <li>Collaboration on projects</li>
                        <li>Business Enquiries</li>
                        <li>Anything else!</li>
                    </ul>
                    <p className="pt-2">Use the form below and I will aim to respond as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto mt-10 3xl:max-w-4xl 3xl:p-12">

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name</label>
                        <input id="name" type="text" name="name" className="mt-1 p-2 w-full border rounded-md" placeholder="John Doe" />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="john@example.com"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Hello! I'd like to..."
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <div className="mb-4">
                        <button type="submit" disabled={state.submitting} className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default ContactForm;