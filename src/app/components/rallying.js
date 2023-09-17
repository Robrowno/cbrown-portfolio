import Link from "next/link";


export default function Rallying() {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-4 gradient-grey">
                <div className="col-span-1 md:col-span-2">
                    <img src="/images/mini-fast-pic.JPG" alt="a mini rally car driving at high speed on track" className="object-cover border-right responsive-image" />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-center text-3xl font-bold mt-3">Rallying</h2>
                    <div className="rallying-content">
                        <p>
                            I have been actively competing in Rallying since early 2022, where I started as a driver and currently compete as a co-driver.
                            I've got experience on single and multi venue events, gravel and closed-road tarmac events and am comfortable going sideways at 100mph!
                        </p>
                        <br />
                        <p>
                            To see more about the latest events/results and about rallying in general, click the button below:
                        </p>
                        <div className="button-row">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-full mt-8 btn-padding">
                                <Link href="/rallying">Rallying</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    )

}