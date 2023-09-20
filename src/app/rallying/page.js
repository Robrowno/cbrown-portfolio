import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function RallyingPage() {
    return (
        <div className="min-h-screen">
            <div className="pt-10 mt-10">
                <h1 className="text-3xl font-bold text-center">Rallying</h1>
            </div>

            <div className="flex flex-col text-center items-center justify-center mt-10">
                <div>
                    <p className="text-xl font-semibold mb-4">My Rallying Story:</p>
                    <hr className="w-8 h-1 mx-auto my-4 bg-yellow-400 border-0 rounded"></hr>
                </div>

            </div>

        </div>
    );
}