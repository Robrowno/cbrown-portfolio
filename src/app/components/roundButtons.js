import { BsCarFrontFill, BsJournalCheck } from 'react-icons/bs';

function SteeringWheelButton() {
    return (
        <div className="bg-white rounded-full p-4">
            <a href="https://www.ewrc-results.com/profile/299348-christian-brown/" rel='noopener' target='_blank' >
                <button className="bg-blue-500 rounded-full p-4 w-20 h-20 flex items-center justify-center">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <BsCarFrontFill size="1.5em" className='text-xl hover:-translate-y-1 transition-transform cursor-pointer text-white hover:text-black' />
                    </div>
                </button>
            </a>
        </div>
    );
}

function NotebookButton() {
    return (
        <div className="bg-white rounded-full p-4">
            <a href="https://www.ewrc-results.com/coprofile/465536-christian-brown/" rel='noopener' target='_blank' >
                <button className="bg-blue-500 rounded-full p-4 w-20 h-20 flex items-center justify-center">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <BsJournalCheck size="1.5em" className='text-xl hover:-translate-y-1 transition-transform cursor-pointer text-white hover:text-black' />
                    </div>
                </button>
            </a>
        </div>
    );
}

export { SteeringWheelButton, NotebookButton };