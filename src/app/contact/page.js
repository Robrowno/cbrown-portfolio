export default function Contact() {
    return (
        <main>
            <div className="py-10 pb-40 lg:pb-80 gradient-grey">
                <h1 className="text-3xl my-11 font-bold text-center">Contact</h1>

                <div className="text-center mt-5">
                    <p> Want to reach me? Maybe you would like to enquire about any of the below subjects:
                    </p>
                    <ul className="list-disc">
                        <li>Hiring for Software Development</li>
                        <li>Co-driving for an Upcoming Rally</li>
                        <li>Collaboration on projects</li>
                        <li>Business Enquiries</li>
                        <li>Anything else!</li>
                    </ul>
                    <p className="pt-2">Use the form below and I will aim to respond as soon as possible.</p>


                </div>

                <form action="/api/contact" method="post" className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto mt-10 3xl:max-w-4xl 3xl:p-12">
                    <div className="mb-4">
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">Your Name</label>
                        <input type="text" name="name" id="fullname" required className="mt-1 p-2 w-full border rounded-md" placeholder="John Doe" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email</label>
                        <input type="email" name="email" id="email" required className="mt-1 p-2 w-full border rounded-md" placeholder="john@example.com" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Message</label>
                        <textarea name="message" id="message" rows="4" required className="mt-1 p-2 w-full border rounded-md" placeholder="Hello! I'd like to..."></textarea>
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Send
                        </button>
                    </div>
                </form>


            </div>

        </main>
    );
}