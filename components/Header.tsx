
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 md:px-8 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.101l-6.138 6.138a.75.75 0 000 1.06l6.138 6.138m4.5-13.338l6.138 6.138a.75.75 0 010 1.06l-6.138 6.138"></path>
                    </svg>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                        Learn<span className="text-blue-500">Flow</span>
                    </h1>
                </div>
                <p className="hidden md:block text-slate-500">Your AI-Powered Learning Companion</p>
            </div>
        </header>
    );
};

export default Header;
