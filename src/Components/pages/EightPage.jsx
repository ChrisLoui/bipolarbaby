import React, { useState } from 'react';
import LetterPage from './LetterPage'; // Import LetterPage component
import './EightPage.css'; // Ensure this file exists for custom styles

const EightPage = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleFirstClick = () => {
        setSelectedMessage('first');
    };

    const handleSecondClick = () => {
        setSelectedMessage('second');
    };

    const handleThirdClick = () => {
        setSelectedMessage('third');
    };

    const handleFourthClick = () => {
        setSelectedMessage('fourth');
    };

    if (selectedMessage) {
        return <LetterPage message={selectedMessage} />;
    }

    return (
        <div className="h-full page-shadow flex flex-col justify-center items-center space-y-10">
            <button
                onClick={handleFirstClick}
                className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg transition-all ease-in duration-75 bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            >
                Click if sad!
            </button>
            <button
                onClick={handleThirdClick}
                className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg transition-all ease-in duration-75 bg-gradient-to-br from-orange-500 to-red-700 hover:text-white group-hover:from-orange-500 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-orange-800"
            >
                Click when angry!
            </button>
            <button
                onClick={handleSecondClick}
                className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg transition-all ease-in duration-75 bg-gradient-to-br from-green-500 to-blue-500 hover:text-white group-hover:from-green-500 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
                Click when in doubt!
            </button>
            <button
                onClick={handleFourthClick}
                className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg transition-all ease-in duration-75 bg-gradient-to-br from-purple-500 to-gray-700 hover:text-white group-hover:from-orange-500 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-orange-800"
            >
                Click when apathy hits!
            </button>
        </div>

    );
};

export default EightPage;
