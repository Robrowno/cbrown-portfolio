'use client';
import { useState } from 'react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.status === 200) {
            window.location.href = '/app/addResult';
        } else {
            window.location.href = '/';
        }
    };

    return (
        <div className="min-h-screen gradient-grey">
            <h1 className="text-3xl my-11 font-bold text-center">Login</h1>
            <h2 className="text-2xl text-center font-bold text-white pt-10">Please enter the correct username and password</h2>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto mt-10 3xl:max-w-4xl 3xl:p-12">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Username"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Password"
                    />
                </div>

                <div className="mb-4">
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
