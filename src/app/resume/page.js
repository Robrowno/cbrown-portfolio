export default function Resume() {
    return (
        <main className="min-h-screen flex">
            <div className="w-1/2 gradient-grey flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-center mb-4">My Resume</h2>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span><a href="/cvs/cBrown_cv_fullstack2.pdf" download>Download</a></span>
                </button>
            </div>
            <div className="w-1/2 gradient-grey flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-center mb-4">Rally CV</h2>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span><a href="/cvs/codriver-cv.pdf" download>Download</a></span>
                </button>
            </div>
        </main>
    );
}
